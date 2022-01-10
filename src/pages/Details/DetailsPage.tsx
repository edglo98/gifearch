import { useParams } from "react-router-dom";
import { Gif } from "../../components/Gif/Gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs";

export const DetailsPage = () => {
  const { id: gifId } = useParams();
  const { gifs } = useGlobalGifs()
  const gif = gifs.data.find(g => g.id === gifId)

  return (
    <div>
      <h1>details of gif with id: {gifId}</h1>
      <Gif {...gif!} />
    </div>
  )
}
