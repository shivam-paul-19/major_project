import { useState } from "react";
import updatedMedList from "./data/medList";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import axios from "axios";
import "./drugFinder.css";

function DrugFinder() {
    const [query, setQuery] = useState('')
    const people = updatedMedList;
    
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    let [output, setOutput] = useState('');

    const filteredPeople =
    query === ''
    ? people.slice(0, 20)
    : people
        .filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 50);
    
    const handleSubmission = async (e) => {
        e.preventDefault();
        if (!selectedPerson) {
            alert("Please select a drug first");
            return;
        }
        console.log(selectedPerson);
        let response = await axios.post("http://localhost:5000/recommend", {
            drug: selectedPerson.name
        });
        console.log(response);
        setOutput(response.data);
    }


  return (
    <div className="drug-container animate-in">
      <div style={{
        height: "60px",
        backgroundColor: "#edfffe"
      }}></div>
      <div className="drug-header">
        <h1>Drug Recommender</h1>
        <p>Find information and alternatives for medications</p>
      </div>

      <div className="drug-search-section">
        <label style={{color: "#125774", fontWeight: "700"}}>Search for a Drug</label>
        <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
          <div className="relative w-full">
            <ComboboxInput
              className="drug-combobox-input"
              aria-label="Drug name"
              displayValue={(person) => person?.name || ""}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Start typing drug name..."
            />
            <ComboboxOptions anchor="bottom start" className="drug-options">
              {filteredPeople.map((person) => (
                <ComboboxOption key={person.id} value={person} className="drug-option">
                  {person.name}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </div>
        </Combobox>
        <form onSubmit={handleSubmission}>
          <button type="submit" className="drug-submit-btn">Find Drug Information</button>
        </form>
      </div>

      {output != '' && selectedPerson && (
        <div className="drug-output">
          <div className="drug-card card-details">
            <h2>Drug Details: {selectedPerson.name}</h2>
            <h3>Description</h3>
            <p className="drug-desc">{output.desc}</p>
          </div>

          <div className="drug-card card-alternatives">
            <h3>Similar Drugs & Alternatives</h3>
            <ul className="similar-drugs-list">
              {output.similar.map((s_drug, idx) => (
                <li key={idx} className="similar-drug-item">
                  <span>{s_drug}</span>
                  <a 
                    href={`https://pharmeasy.in/search/all?name=${s_drug}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="buy-link"
                  >
                    Buy
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DrugFinder;
