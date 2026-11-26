import { useParams } from "@/router/RouterProvider"



function ProductDetail() {

  const {id} = useParams()

  return (
    <div>ProductDetail: {id}</div>
  )
}
export default ProductDetail