

let count = 0; 


function Headline() {



  console.log(++count);
  
  
  return (
    <div>{count}</div>
  )
}
export default Headline