import axios from "axios";
import { useState } from "react";

function ImageForm() {
    let [selectedFile, setSelectedFile] = useState(null);
    let [output, setOutput] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const sendImage = async (e) => {
        e.preventDefault()
        if (!selectedFile) {
            alert("Please select an image first");
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
    <>
        <div style={{
            height: "50px"
        }}>
            {/* For spacing */}
        </div>
        <form action="" onSubmit={sendImage}>
            <label htmlFor="image">Upload your image here</label>
            <input type="file" name="image" id="image" onChange={handleFileChange}/>
            <button type="submit">Send</button>
        </form> <br />
        <div className="output">
            {output}
        </div>
    </>
  )
}

export default ImageForm;