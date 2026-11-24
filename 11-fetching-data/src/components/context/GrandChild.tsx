import { useContext } from "react"
import { UserContext } from "./UserContext"

function GrandChild() {

  const ctx = useContext(UserContext);

  if(!ctx) return;
  
  const { username } = ctx;
  


  return (
    <div>
      <h4>바뀐다44444</h4>
      <p>안녕하세요, <strong>{username}</strong>님!</p>
    </div>
  )
}
export default GrandChild