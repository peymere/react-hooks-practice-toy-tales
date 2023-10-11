import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, url}) {
  
  

  return (
    <div id="toy-collection">
      {toys.map(toy => {
        return(
          <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} handleDelete={handleDelete} url={url} />
        )
      })}
    </div>
  );
}

export default ToyContainer;
