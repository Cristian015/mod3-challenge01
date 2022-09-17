

import React from 'react'
import { getCharacters } from '../helpers/getCharacterers';

export const ImgGrid = () => {

    useEffect(() => {
        setIsLoading(true);
        getCharacters()
          .then((data) => setCharList(data.results))
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }, []);
    

    console.log(getCharacters());

  return (
    <div>ImgGrid</div>
  )
}
