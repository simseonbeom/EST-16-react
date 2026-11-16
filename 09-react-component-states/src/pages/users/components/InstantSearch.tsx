import { useId } from "react"



interface Props {
  onToggle: () => void;
}



function InstantSearch({onToggle}:Props) {

  const id = useId()

  return (
      <header className='UserPage__header'>
        <h1>사용자 목록</h1>
        <div className="formControl InstantSearch">
          <label htmlFor={id}>
            <input type="checkbox" id={id} onChange={onToggle}/>
          </label>
        </div>
      </header>
  )
}
export default InstantSearch