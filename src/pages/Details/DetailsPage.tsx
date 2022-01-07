import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>details of gif with id: {params.id}</h1>
    </div>
  )
}
