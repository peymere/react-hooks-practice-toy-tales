import React, {useState} from "react";

function ToyCard({id, name, image, likes, handleDelete, url}) {
  const [newLikes, setLikes] = useState(likes)
  
  const handleLikes = (id, newLikes) => {
    setLikes(newLikes += 1)
    fetch(url + id, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
      .then(r => r.json())
  }
  // console.log("toy id:", id, "total likes:", newLikes)
  // console.log(typeof(newLikes))
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(id, newLikes)} >Like {"<3"}</button>
      <button className="del-btn" onClick={()=> handleDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
