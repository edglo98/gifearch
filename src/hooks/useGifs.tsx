import { ErrorResult } from "@giphy/js-fetch-api"
import { useEffect, useState } from "react"
import { GifsResultOwn } from "../interfaces/gifs"
import { searchGifs } from "../services/giphy"
import { useGlobalGifs } from "./useGlobalGifs"

interface OptionsProps {
  limit: number;
  page: number;
}

const INITIAL_OPTIONS: OptionsProps = {
  limit: 18,
  page: 0,
}

export const useGifs = (query: string | null = null, options: OptionsProps = INITIAL_OPTIONS) => {
  const [error, setError] = useState<ErrorResult>()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(options.page)
  const [loadingNext, setLoadingNext] = useState(false)
  const { gifs, setGifs } = useGlobalGifs()
  
  const keyword = query || localStorage.getItem('lastKeyword') || "gatitos"

  useEffect(() => {
    setLoading(true)
    searchGifs(keyword, options)
      .then(res => {
        setGifs(res)
        localStorage.setItem('lastKeyword', keyword)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [query, options, keyword])

  useEffect(() => {
    if (page !== options.page) {
      setLoadingNext(true)

      searchGifs(keyword, { ...options, offset: page * options?.limit })
        .then(response => {
          setGifs(prev => ({
            ...response, 
            data: [
              ...prev.data, 
              ...response.data
            ]
          }))
        })
        .catch(setError)
        .finally(() => setLoadingNext(false))
    }
  }, [page, keyword, options, setGifs])

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  return {
    ...gifs,
    error,
    loading,
    handleNextPage,
    loadingNext,
  }
}