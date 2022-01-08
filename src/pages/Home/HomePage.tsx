import { Gif } from "../../components/Gif/Gif"
import { Grid } from "../../components/Grid/Grid"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"

export const HomePage = () => {
  const {data: gifs, error, loading} = useGifs()

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <section>
      <SearchInput />
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
    </section>
  )
}
