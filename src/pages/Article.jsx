import { useParams } from "react-router-dom"
// import { useFetch } from "../Hooks/useFetch"

export default function Article() {
  const { id } = useParams()

  return (
    <div>
        Article page
    </div>
  )
}
