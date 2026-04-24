import type { Gif } from "../../mock-data/gif.mock"

interface Props {
  listGif: Gif[];

}

export const GifList = ({ listGif }: Props) => {
  return (
    <>
      {
        listGif.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} * {gif.height} ( 1.5mb )
            </p>
          </div>
        ))
      }
    </>
  )
}