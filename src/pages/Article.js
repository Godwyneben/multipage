import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"


export default function Article() {
  const { id } = useParams()
  const url = "http://localhost:3000/articles/" + id
  const { data: article, isPending, error } = useFetch(url)

  return (
    <div>
      {isPending && <div> Loading...</div> }
      {error && <div>{error}</div> }
      {article && (
        <div>
          <h1>{article.title}</h1>
          <h3>By {article.author}</h3>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
