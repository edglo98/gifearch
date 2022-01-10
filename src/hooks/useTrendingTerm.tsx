import { useEffect, useState } from "react"
import { trendingSearchTerms } from "../services/giphy"

export const useTrendingTerm = () => {
  const [trends, setTrends] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    trendingSearchTerms()
      .then(({data})=>setTrends(data))
      .catch(setError)
      .finally(() => setLoading(false))
  },[])

  return {
    trends,
    error,
    loading,
  }
}
