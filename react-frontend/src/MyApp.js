// src/MyApp.js
import React, {useState} from 'react';
import Table from './Table';
// src/MyApp.js (Adding the form component after the table)
import Form from './Form';
  
function MyApp() {
  
	const [characters, setCharacters] = useState([]);

  function updateList(person) {
    setCharacters([...characters, person]);
  }

	function removeOneCharacter (index) {
	    const updated = characters.filter((character, i) => {
	        return i !== index
	    });
	  setCharacters(updated);
	}
  return (
    <div className="container">
      <Table characterData={characters} 
        removeCharacter={removeOneCharacter} />
        <Form handleSubmit={updateList} />
    </div>
  )
}



export default MyApp;