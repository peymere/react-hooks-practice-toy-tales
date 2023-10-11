import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [loading, setLoading] = useState(true)

  const url = 'http://localhost:3001/toys/'
  
  useEffect(() => {
    fetch(url)
      .then(setLoading(true))
      .then(r => r.json())
      .then(toyData => setToys(toyData))
      .catch(error => console.error(error))
      .then(setLoading(false))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleDelete = (id) => {
    fetch(url + id, {
      method:"DELETE"
    })
      .then(r => r.json())
      .then(() => console.log("deleted toy", id))
    
    setToys(toys.filter(toy => toy.id !== id))
    console.log("deleted toy", id)
  }

  
  

  const addToy = (toy) => {
    setToys([...toys, toy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm url={url} addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {loading && <p>Loading...</p>}
      <ToyContainer toys={toys} handleDelete={handleDelete} url={url} />
    </>
  );
}

export default App;
