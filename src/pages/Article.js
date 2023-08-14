import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import { useEffect } from "react"


export default function Article() {
  const { id } = useParams()
  const url = "http://localhost:3000/articles/" + id
  const { data: article, isPending, error } = useFetch(url)
  const history = useHistory

  useEffect(() => {
    if (error){
      // redirect 
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error])

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
