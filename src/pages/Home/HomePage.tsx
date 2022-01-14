import { GifGrid } from "../../components/GifGrid/GifGrid"
import { LazyTrendsStack } from "../../components/LazyTrendsStack/LazyTrendsStack"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"

export const HomePage = () => {
  const {data: gifs, error: gifsError, loading: gifsLoading} = useGifs()

  return (
    <section>
      <SearchInput />
      <GifGrid gifs={gifs} error={gifsError} loading={gifsLoading} />
      <LazyTrendsStack />
    </section>
  )
}
