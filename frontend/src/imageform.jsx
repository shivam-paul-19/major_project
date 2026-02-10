import axios from "axios";
import { useState } from "react";

function ImageForm() {
    const [selectedFile, setSelectedFile] = useState(null);

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
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <>
        <form action="" onSubmit={sendImage}>
            <label htmlFor="image">Upload your image here</label>
            <input type="file" name="image" id="image" onChange={handleFileChange}/>
            <button type="submit">Send</button>
        </form>
    </>
  )
}

export default ImageForm;