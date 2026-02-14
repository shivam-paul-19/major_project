import axios from "axios";
import { useState } from "react";
import "./imageform.css";

function ImageForm() {
    let [selectedFile, setSelectedFile] = useState(null);
    let [output, setOutput] = useState("");
    let [error, setError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedExtensions = ["png", "jpg", "jpeg"];
            const fileExtension = file.name.split(".").pop().toLowerCase();
            
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Only PNG, JPG, and JPEG files are acceptable.");
                setSelectedFile(null);
                e.target.value = ""; // Clear the input
                return;
            }
            
            setError("");
            setSelectedFile(file);
        }
    };

    const sendImage = async (e) => {
        e.preventDefault()
        if (error) {
            return;
        }
        if (!selectedFile) {
            alert("Please select a valid image first");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:5000/skin", formData);
            setOutput(response.data.output.result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <div className="image-container animate-in">
      <div style={{
        height: "60px",
        backgroundColor: "#edfffe"
      }}></div>
      <div className="image-header">
        <h1>Skin Disease Scanner</h1>
        <p>Upload a clear image of the affected area for AI analysis</p>
      </div>

      <div className="image-upload-section">
        <form className="image-upload-form" onSubmit={sendImage}>
          <label className="image-label" htmlFor="image">Upload your image here</label>
          <input 
            className="image-input"
            type="file" 
            name="image" 
            id="image" 
            accept=".png,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {error && <p className="validation-error">{error}</p>}
          <button className="image-submit-btn" type="submit">Scan Image</button>
        </form>
      </div>

      {output && (
        <div className="image-output">
          <h2>Analysis Result</h2>
          <div className="image-result">
            {output}
          </div>
          <p style={{marginTop: "1rem", fontSize: "0.85rem", color: "#666"}}>
            *This is an AI-generated assessment. Please consult a dermatologist for a professional clinical diagnosis.
          </p>
        </div>
      )}
    </div>
  )
}

export default ImageForm;