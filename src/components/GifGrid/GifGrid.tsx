import { IGif } from "../../hooks/useGifs"
import { Gif } from "../Gif/Gif"
import { Grid } from "../Grid/Grid"

interface Props {
  gifs: IGif[];
}

export const GifGrid = ({gifs}: Props) => {
  return (
    <Grid>
      {
        gifs.map(gif => (
          <Gif 
            title={gif.title}
            url={gif.url}
            key={gif.id}
            id={gif.id as string}
          />
        ))
      }
    </Grid>
  )
}
