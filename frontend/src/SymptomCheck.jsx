import axios from "axios";
import { useState } from "react";
import "./SymptomCheck.css";

function SymptomCheck() {
  let [output, setOutput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = e.target[0].value;
    let response = await axios.post("http://localhost:5000/predict/disease", {
      sym: data,
    });
    console.log(response);
    setOutput(response.data);
  };

  return (
    <div className="symptom-container">
      <div className="symptom-header">
        <h1>Symptom Checker</h1>
        <p>Describe your symptoms to get a potential assessment</p>
      </div>

      <div className="symptom-form-section">
        <form className="symptom-form" onSubmit={handleSubmit}>
          <label htmlFor="symp">Write your symptoms</label>
          <input
            className="symptom-input"
            type="text"
            name="symp"
            id="symp"
            placeholder="e.g. fever, cough, headache"
          />
          <button className="symptom-submit-btn" type="submit">Check Symptoms</button>
        </form>
      </div>

      {output && (
        <div className="symptom-output">
          <h2>Potential Assessment: {output.disease}</h2>
          
          <div className="symptom-output-section">
            <h3>Description</h3>
            <p>{output.desc}</p>
          </div>

          <div className="symptom-output-section">
            <h3>Recommended Diet</h3>
            <ul>
              {output.diet.map((d, idx) => (
                <li key={idx}> {d}</li>
              ))}
            </ul>
          </div>

          <div className="symptom-output-section">
            <h3>Precautions</h3>
            <ul>
              {output.prec.map((d, idx) => (
                <li key={idx}> {d}</li>
              ))}
            </ul>
          </div>

          <div className="symptom-output-section">
            <h3>Suggested Medication</h3>
            <p style={{fontStyle: "italic", fontSize: "0.9rem", color: "#9f2b2b", marginBottom: "0.5rem"}}>
              *Consult a doctor before taking any medication.
            </p>
            <ul>
              {output.med.map((d, idx) => (
                <li key={idx}> {d}</li>
              ))}
            </ul>
          </div>

          <div className="symptom-output-section">
            <h3>Workout Recommendations</h3>
            <ul>
              {output.workout.map((d, idx) => (
                <li key={idx}> {d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SymptomCheck;
