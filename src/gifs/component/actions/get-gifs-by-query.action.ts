import type { Gif } from "../interface/gif.interface";
import type { GifphyResponce } from "../interface/giphy.response";
import { giphyApi } from "../../api/giphy.api";

export const getGifsByQuery = async( query: string ) : Promise<Gif[]> =>{
    
    const  response  = await giphyApi<GifphyResponce>('/search', {
        params: {
            q: query,
            limit: 10,
        }
    })

    return response.data.data.map( ( gif ) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }) )
    // await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Tz2Cn9xgwtr6wmFJTvn6qpO4M3B93Gjs&q=${query}&limit=1&lang=en`)

}