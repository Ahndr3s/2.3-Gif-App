import type { GyphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GyphyResponse>("/search", {
    params: {
      q: query,
      limit: "10",
    },
  });

  // console.log(response.data);
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));

  // fetch(`https://api.giphy.com/v1/gifs/search?api_key=s8BcNKs8PxEb31xZ79aBL2pMSqNuzHvC&q=${query}&limit=25&lang=en`)
};
