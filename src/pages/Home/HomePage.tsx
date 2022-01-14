import { GifGrid } from "../../components/GifGrid/GifGrid"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"
import { LazyTrendsStack, TrendsStack } from "../../components/TrendsStack/TrendsStack"

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
