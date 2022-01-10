import { useContext } from "react"
import { GifContext } from "../context/GifContext"

export const useGlobalGifs = () => {
  const { gifs, setGifs } = useContext(GifContext)

  return {
    gifs,
    setGifs,
  }
}