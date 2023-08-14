import { useLocation } from "react-router-dom"

export default function Contact() {
const queryString = useLocation().search

const queryParams = new URLSearchParams(queryString)
const name =queryParams.get("name")


  return (
    <div>
        <h2>Hey {name}, Contact us here</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Asperiores recusandae vel iusto, perferendis earum inventore, 
          fuga, odit ipsa incidunt suscipit doloremque nobis. 
          Nobis reprehenderit facere reiciendis assumenda, veritatis minus adipisci!
        </p>
    </div>
  )
}
