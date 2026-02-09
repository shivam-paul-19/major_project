import os
import asyncio
import nest_asyncio
from dotenv import load_dotenv, find_dotenv

# LangChain & Groq Imports
from langchain_groq import ChatGroq
from langchain_classic.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_huggingface import HuggingFaceEmbeddings

# Load environment variables and define constants
load_dotenv(find_dotenv())
nest_asyncio.apply()
DB_FAISS_PATH = "chatbot/vectorstore/db_faiss"
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

def load_vectorstore(model):
    embedding_model = HuggingFaceEmbeddings(model_name=model)
    return FAISS.load_local(DB_FAISS_PATH, embedding_model, allow_dangerous_deserialization=True)

vectorstore = load_vectorstore('sentence-transformers/all-MiniLM-L6-v2')

class Prompt:
    def makePrompt(self) -> PromptTemplate:
        return PromptTemplate(
        template="""Use the provided context to answer the user's question.
        If you don't know the answer, say "I don't know" instead of making one up. Always stay within the given context.

        **Context:**
        {context}

        **Question:**
        {question}

        Please provide a **concise, elaborative and informative response**.
        Elaborate the answer, add bullet points only wherever necesaary.
        The user has has very less or no medical knowledge, explain the answer accordingly.
        """,
        input_variables=["context", "question"]
    )

class LLM:
    def loadLlm(self, model: str, temp: float) -> ChatGroq:
        return ChatGroq(
            temperature=temp,
            model_name=model
        )

def answerGenerator(userPrompt: str) -> str:
    llm = LLM()
    prompt = Prompt()

    qa_chain = RetrievalQA.from_chain_type(
        llm=llm.loadLlm(model="llama-3.3-70b-versatile", temp=0.5),
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={'k': 5}),
        return_source_documents=True,
        chain_type_kwargs={'prompt': prompt.makePrompt()}
    )

    response = qa_chain.invoke({'query': userPrompt})
    return response['result']