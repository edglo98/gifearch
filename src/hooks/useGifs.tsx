import { ErrorResult, GifsResult } from "@giphy/js-fetch-api"
import { useEffect, useState } from "react"
import { searchGifs } from "../services/giphy"

interface OptionsProps {
  offset: number
}

const initialState: GifsResult = {
  data: [],
  pagination: {
    total_count: 0,
    count: 0,
    offset: 0,
  },
  meta: { // copilot metadata (not used) jajaja equisde
    status: 200,
    msg: "OK",
    response_id: "5e8f8f9b9f9e600020c7d8f8",
  },
}

export const useGifs = (query: string = 'gatitos', options?: OptionsProps) => {
  const [gifs, setGifs] = useState<GifsResult>(initialState)
  const [error, setError] = useState<ErrorResult>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    searchGifs(query, options)
      .then(setGifs)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [query, options])

  return {
    ...gifs,
    error,
    loading,
  }
}