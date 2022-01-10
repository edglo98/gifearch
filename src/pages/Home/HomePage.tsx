import { useEffect } from "react"
import { GifGrid } from "../../components/GifGrid/GifGrid"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"
import { trendingSearchTerms } from "../../services/giphy"

export const HomePage = () => {
  const {data: gifs, error, loading} = useGifs()

  useEffect(()=>{
    trendingSearchTerms().then(console.log)
  },[])

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <section>
      <SearchInput />
      <GifGrid gifs={gifs} />
    </section>
  )
}
