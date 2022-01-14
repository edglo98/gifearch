import { useParams } from 'react-router-dom';
import { GifGrid } from '../../components/GifGrid/GifGrid';
import { useGifs } from '../../hooks/useGifs';

export const SearchPage = () => {
  const {query} = useParams();
  const {data: gifs, error, loading, loadingNext, handleNextPage} = useGifs(query)
  
  return (
    <div>
      <h1>Busqueda de <b>{ query }</b></h1>
      <GifGrid gifs={gifs} loading={loading} error={error} />
      <div>
        {loadingNext && <p>Cargando más...</p>}
      </div>
      <button onClick={handleNextPage}>
        Cargar más
      </button>
    </div>
  )
}
