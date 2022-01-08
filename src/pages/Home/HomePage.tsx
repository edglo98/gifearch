import { GifGrid } from "../../components/GifGrid/GifGrid"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"

export const HomePage = () => {
  const {data: gifs, error, loading} = useGifs()

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <section>
      <SearchInput />
      <GifGrid gifs={gifs} />
    </section>
  )
}
