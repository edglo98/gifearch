import { useTrendingTerm } from "../../hooks/useTrendingTerm"
import { Chip } from "../Chip/Chip"
import { Stack } from "../Stack/Stack"

export const TrendsStack = () => {
  const {trends, error: trendError, loading: trendLoading} = useTrendingTerm()

  if(trendLoading) return <div>Loading...</div>
  if(trendError) return <div>Error: {trendError.message}</div>

  return (
    <Stack>
      {trends.map(t => <Chip key={t} label={t} />)}
    </Stack>
  )
}

export default TrendsStack
