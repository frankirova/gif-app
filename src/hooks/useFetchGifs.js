import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getContent = async () => {
    const newGif = await getGif(category);
    setGifs(newGif);
    setIsLoading(false);
  };

  useEffect(() => {
    getContent();
  }, []);

  return {
    gifs: gifs,
    isLoading: isLoading,
  };
};
