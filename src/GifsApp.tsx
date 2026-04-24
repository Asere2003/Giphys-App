import { CustomHeader } from "./shared/components/CustomHeader"
import { GifList } from "./gifs/component/GifsList"
import { PreviousSearches } from "./gifs/component/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

  const { gifs, handlerSearch, previousTerm, handelTermClicked  } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" descriptions="Descubre y comarte el Gif perfecto" />

      {/* Search */}
      <SearchBar 
        placeholder="Buscador de Gifs" 
        // onQuery={( query: string ) =>  handlerSearch(query) }
        // Es lo mismo que
        onQuery={ handlerSearch }
      />

      {/* Busquedas previas */}
      <PreviousSearches title=" Busquedas previas" 
        searches={previousTerm} onLabelClicked={ handelTermClicked }  
      />

      {/*  Gifs List*/}
      <div className="gifs-container">
        <GifList listGif={gifs} />
      </div>
    </>
  )
}
