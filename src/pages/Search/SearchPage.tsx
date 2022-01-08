import { useParams } from 'react-router-dom';
import { GifGrid } from '../../components/GifGrid/GifGrid';
import { useGifs } from '../../hooks/useGifs';

export const SearchPage = () => {
  const {query} = useParams();
  const {data: gifs, error, loading} = useGifs(query)

  if(error) return <div>Error: {error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <div>
      <h1>query: { query }</h1>
      <GifGrid gifs={gifs} />
    </div>
  )
}
