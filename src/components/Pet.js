import React, {useState} from "react";

function Pet({pet, onAdoptPet}) {

  const [isAdopted, setIsAdopted] = useState(false)

  const handleAdopt = () => {
    setIsAdopted(!isAdopted)
  }


  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {pet.name}
          
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
       
         {isAdopted ? 
          <button onClick={handleAdopt}>Already adopted</button> :
          <button  onClick={handleAdopt} className="ui primary button">Adopt pet</button>}
        
        
      </div>
    </div>
  );
}

export default Pet;
