import { Stack } from "../../components/Stack/Stack"
import { GifGrid } from "../../components/GifGrid/GifGrid"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { useGifs } from "../../hooks/useGifs"
import { useTrendingTerm } from "../../hooks/useTrendingTerm"
import { Chip } from "../../components/Chip/Chip"

export const HomePage = () => {
  const {data: gifs, error, loading} = useGifs()
  const {trends, error: trendError, loading: trendLoading} = useTrendingTerm()

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <section>
      <SearchInput />
      {trendLoading && <div>Loading...</div>}
      <Stack>
        {trendError && <div>Error: {trendError.message}</div>}
        {trends.map(t => <Chip key={t} label={t} />)}
      </Stack>
      <GifGrid gifs={gifs} />
    </section>
  )
}
