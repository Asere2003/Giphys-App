import { useRef, useState } from "react"

import type { Gif } from "../component/interface/gif.interface"
import { getGifsByQuery } from "../component/actions/get-gifs-by-query.action"

/* Lo sacamos fuera pora que cuando se renderice el componente no se regenere y mantega el estado  */
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  
      const [previousTerm, setPreviousTerm] = useState<string[]>([])
    
      const [ gifs, setGif ] =  useState<Gif[]>([])

      const gifsCache = useRef<Record<string, Gif[]>>({});
    
      const handelTermClicked = async ( term: string ) => {
        if ( gifsCache.current[term] ) {
          setGif(gifsCache.current[term])
          return;
        }
        const gifs = await getGifsByQuery( term )
        setGif( gifs )
      }
    
      const handlerSearch = async ( query : string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0 || query.length > 7 ) return
        if( previousTerm.includes( query )) return 
        setPreviousTerm( [ query, ...previousTerm ].slice( 0, 8))
        const gifs = await getGifsByQuery(query)
        setGif( gifs )
        gifsCache.current[query] = gifs;
    
      }
  
    return {
        // Value / Props 
        gifs,
        previousTerm,

        // Methods / Actions
        handelTermClicked,
        handlerSearch
    }
}
