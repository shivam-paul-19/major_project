import pandas as pd
import pickle
import joblib

# loading data 
with open('drug_recommendation\medicine_dict.pkl', 'rb') as file:
    medicines = pd.DataFrame(pickle.load(file))
similarity = joblib.load('drug_recommendation\similarity.joblib')
description_data = pd.read_csv('drug_recommendation\medicine.csv')

class Recommendor:
    def getIndex(self, drug: str) -> int:
        medicine_index = medicines[medicines['Drug_Name'] == drug].index[0]
        return medicine_index

    def getSimilarDrugs(self, drugIdx: int) -> list:
        distances = similarity[drugIdx]
        medicines_list = sorted(enumerate(distances), reverse=True, key=lambda x: x[1])[1:6]
        return [medicines.iloc[i[0]].Drug_Name for i in medicines_list]

    def getDesc(self, drug: str) -> str:
        return description_data.loc[description_data['Drug_Name'] == drug, 'Description'].values[0]
    
class RecommedationOrchestrator:
    def __init__(self, drug: str):
        self.drug = drug
    
    def run(self) -> dict:
        rec = Recommendor()
        idx = rec.getIndex(self.drug)
        desc = rec.getDesc(self.drug)
        similar_drugs = rec.getSimilarDrugs(idx)

        output = {
            "drug_name": self.drug,
            "desc": desc,
            "similar": similar_drugs
        }

        return output

# r = RecommedationOrchestrator(drug="Alergin Tablet 10'S")
# print(r.run())
