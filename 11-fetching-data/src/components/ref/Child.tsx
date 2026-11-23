import { forwardRef, type Ref } from "react";

interface Props {
  placeholder: string;
  ref?:Ref<HTMLInputElement>
}


// react 19+ 
function Child({placeholder, ref}:Props) {

  return (
    <input
      ref={ref}
      placeholder={placeholder}
      type="text" 
    />
  )
}
export default Child 


// react 18+
const Child = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
  return <input ref={ref} type="text" placeholder={placeholder} />
})


