import NoteApp from "@/NoteApp/App";
// import ProductPage from "./pages/products/ProductPage";
// import UserPage from "./pages/users/UserPage";



function Playground() {
  return (
    <div style={styles}>
      {/* <UserPage /> */}
      {/* <ProductPage /> */}
      <NoteApp />
    </div>
  )
}

export default Playground;





const styles:React.CSSProperties = {
  display:'flex',
  flexDirection:'column',
  gap:20
}

