import { ErrorResult, GifsResult } from "@giphy/js-fetch-api"
import { useEffect, useState } from "react"
import { searchGifs } from "../services/giphy"

interface OptionsProps {
  offset: number
}

export interface IGif {
  title: string;
  url: string;
  id: string | number;
}

interface GifsResultOwn {
  data: IGif[]; // Giphy no exporta la clase IGif... 
  pagination: GifsResult['pagination'];
  meta: GifsResult['meta'];
}

const initialState: GifsResultOwn = {
  data: [],
  pagination: {
    total_count: 0,
    count: 0,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: "OK",
    response_id: "5e8f8f9b9f9e600020c7d8f8",
  },
}

export const useGifs = (query: string | null = null, options?: OptionsProps) => {
  const [gifs, setGifs] = useState<GifsResultOwn>(initialState)
  const [error, setError] = useState<ErrorResult>()
  const [loading, setLoading] = useState(false)

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