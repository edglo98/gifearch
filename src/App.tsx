import { useEffect, useState } from 'react'
import './App.css'
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY as string)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

function App() {
  const [gifs, setGifs] = useState<GifsResult>()

  useEffect(() => {
    fetchGifs(0).then(setGifs)
  }, [])

  return (
    <div>
      {
        gifs?.data.map(gif => (
          <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
        ))
      }
    </div>
  )
}

export default App
