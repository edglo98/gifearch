import { ErrorResult } from "@giphy/js-fetch-api"
import { useEffect, useState } from "react"
import { searchGifs } from "../services/giphy"
import { useGlobalGifs } from "./useGlobalGifs"

interface OptionsProps {
  offset: number
}

export const useGifs = (query: string | null = null, options?: OptionsProps) => {
  // const [gifs, setGifs] = useState<GifsResultOwn>(initialState)
  const [error, setError] = useState<ErrorResult>()
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useGlobalGifs()

  useEffect(() => {
    const keyword = query || localStorage.getItem('lastKeyword') || "gatitos"
    setLoading(true)
    searchGifs(keyword, options)
      .then(res => {
        setGifs(res)
        localStorage.setItem('lastKeyword', keyword)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [query, options])

  return {
    ...gifs,
    error,
    loading,
  }
}