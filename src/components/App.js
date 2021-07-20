import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  

  // const handleAdoptPet = (id) => {
  //   setIsAdopted(!isAdopted)
  // }





  // useEffect(() => {
  //   fetch("http://localhost:3001/pets")
  //    .then(resp => resp.json())
  //    .then(data => setPets(data))

  // }, [])

  const handleChange = (event) => {
    setFilters({
      type: event.target.value
    })
    
  }
   

  const handleSelect = () => {
    const api = `http://localhost:3001/pets${filters.type==="all" ? "" : "?type="+filters.type}`
    fetch(api)
      .then(resp => resp.json())
      .then(data => setPets(data))
    }
  
   
  
 
   


  
  




  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChange} onFindPetsClick={handleSelect}/>
          </div>
          <div className="twelve wide column">
            
            <PetBrowser  pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
