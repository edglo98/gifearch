import { ErrorResult } from "@giphy/js-fetch-api"
import { IGif } from "../../interfaces/gifs"
import { Gif } from "../Gif/Gif"
import { Grid } from "../Grid/Grid"

interface Props {
  gifs: IGif[];
  error?: ErrorResult | null;
  loading: boolean;
}

export const GifGrid = ({gifs, error, loading}: Props) => {

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div style={{minHeight: '100vh'}}>Loading...</div> // TODO: add loading indicator

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
