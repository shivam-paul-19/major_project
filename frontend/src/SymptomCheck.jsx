import axios from "axios";
import { useState } from "react";

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
    <>
      <div
        style={{
          height: "50px",
        }}
      >
        {/* For spacing */}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="symp">Write your symptoms</label>
        <br />
        <input
          style={{
            border: "1px solid black",
            width: "500px",
          }}
          type="text"
          name="symp"
        />
        <datalist>
            
        </datalist>
        <br />
        <button type="submit">Sumbit</button>
      </form>
      <div className="output">
        {output == "" ? (
          <div></div>
        ) : (
          <>
            {output.disease} <br />
            description: {output.desc} <br />
            diet:{" "}
            <ul>
              {output.diet.map((d, idx) => {
                return <li key={idx}> - {d}</li>;
              })}
            </ul>
            precuation:{" "}
            <ul>
              {output.prec.map((d, idx) => {
                return <li key={idx}> - {d}</li>;
              })}
            </ul>
            medication:{" "}
            <ul>
              {output.med.map((d, idx) => {
                return <li key={idx}> - {d}</li>;
              })}
            </ul>
            workout:{" "}
            <ul>
              {output.workout.map((d, idx) => {
                return <li key={idx}> - {d}</li>;
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default SymptomCheck;
