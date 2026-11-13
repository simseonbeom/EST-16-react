import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Form from './programming/declarative.tsx'




const root = document.getElementById('root')!

if(root){
  createRoot(root).render(
    <StrictMode>
      <Form></Form>
    </StrictMode>
  )
}








