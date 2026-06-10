import { useState, useRef } from "react";
import { getGifsByQuery } from "../../gifs/actions/get-gifs-by-query.action";
import type { Gif } from "../../gifs/interfaces/gif.interface";

/*
  Utitlity Type Record para definir los gifs cacheados
    
    La definicion del cache esta fuera del customHook para
    evitar que se redefina desde 0 al hacer re renderizados
*/
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [currentGifs, setcurrentGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  /* 
    Usamos useRef al definir gifsCache para almacenar correctamente
    los valores de las busquedas en el gifsCache sin importar que
    el componente se re renderice
  */
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const HandleLabelClick = async (tag: string) => {
    if (gifsCache.current[tag]) {
      setcurrentGifs(gifsCache.current[tag]);
      return;
    }

    const gifs = await getGifsByQuery(tag);
    setcurrentGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();
    if (query.length === 0) return;

    setPreviousSearches((prev) =>
      previousSearches.includes(query)
        ? prev
        : [...previousSearches, query].splice(0, 7),
    );
    const gifs = await getGifsByQuery(query);
    setcurrentGifs(gifs);
    // console.log(gifs);

    gifsCache.current[query] = gifs;
  };

  return { currentGifs, previousSearches, handleSearch, HandleLabelClick };
};
