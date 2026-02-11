import axios from "axios";
import { useState } from "react";

function SymptomCheck() {
    let [output, setOutput] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = e.target[0].value;
        let response = await axios.post("http://localhost:5000/predict/disease", {
            sym: data
        });
        console.log(response.data);
        setOutput(response.data);
    }

  return (
    <>
    <div style={{
        height: "50px"
    }}>
        {/* For spacing */}
    </div>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="symp">Write your symptoms</label><br />
        <input style={{
            border: "1px solid black",
            width: "500px"
        }} type="text" name="symp"/> <br />
        <button type="submit">Sumbit</button>
    </form>
    <div className="output">
        {output}
    </div>
    </>
  )
}

export default SymptomCheck;