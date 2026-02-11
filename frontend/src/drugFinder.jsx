import { useState } from "react";
import updatedMedList from "./data/medList";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import axios from "axios";


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
        console.log(selectedPerson);
        let response = await axios.post("http://localhost:5000/recommend", {
            drug: selectedPerson.name
        });
        console.log(response);
        setOutput(response.data);
    }


  return (
    <>
    <div style={{
        height: "50px"
    }}>
        {/* For spacing */}
    </div>
    <div>drugFinder</div>
    <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
      <ComboboxInput
        aria-label="Assignee"
        displayValue={(person) => person?.name}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {filteredPeople.map((person) => (
          <ComboboxOption key={person.id} value={person} className="data-focus:bg-blue-100">
            {person.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
    <form action="" onSubmit={handleSubmission}>
        <button type="submit">Find drug</button>
    </form>
    <div className="output">
        {
            output == ''? (
                <div></div>
            ) : (
                <div>
                    Description: {output.desc} <br />
                    Similar drugs: 
                    <ul>
                        {output.similar.map((s_drug, idx) => {
                            return <li key={idx}> - {s_drug} <i><u><a href={`https://pharmeasy.in/search/all?name=${s_drug}`} target="_blank">buy</a></u></i></li>;
                        })}
                    </ul>
                </div>
            )
        }
    </div>
    </>
  )
}

export default DrugFinder;