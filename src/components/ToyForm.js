import React, {useState} from "react";

function ToyForm({url, addToy}) {
  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] =useState("")

  const newToyData = {
    name : newToyName,
    image : newToyImage,
    likes : 0
  }

  const handleToySubmit = (e) => {
    console.log("this works")
    e.preventDefault()
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyData)
    })
      .then((r) => r.json())
      .then((newToy) => addToy(newToy))
    e.target.reset()
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
}

export default ToyForm;
