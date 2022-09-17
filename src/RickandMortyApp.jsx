import { useEffect } from "react";
import { useState } from "react";
import { Char } from "./components/Char";
import { ImgGrid } from "./components/ImgGrid";
import { getCharacters } from "./helpers/getCharacterers";



export const RickandMortyApp = () => {


    const [ charList, setCharList ] = useState([]);
    const [ image, setImage ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

  
    useEffect(() => {
        setIsLoading(true);
        getCharacters()
          .then((data) => setCharList(data.results))
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }, []);

  return (
    
      
      <div className="page">
      { isLoading && <span className="loading-text">Loading</span> }
      <div>
      <img
        src={ image}
        alt="no hay imagen"
      />
      </div>
        
        {charList.map((char) => (
            <Char
              key={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              imageUrl={char.image}
              setImage={setImage}
              />
        ) )}

      </div>

    
  )
}
