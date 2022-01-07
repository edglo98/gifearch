import { useGifs } from './hooks/useGifs'
import './App.css'

function App() {
  const {data: gifs, error, loading} = useGifs()


  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <div>
      {
        gifs.map(gif => (
          <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
        ))
      }
    </div>
  )
}

export default App
