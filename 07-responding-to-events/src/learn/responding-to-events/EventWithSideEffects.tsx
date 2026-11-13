import { useState } from "react";




function EventWithSideEffects() {

  const [,setRender] = useState(0)

  const forceRender = () => {
    setRender((prev)=>prev + 1)
  }

  // 카운트 다운 버튼을 누르면 숫자가 100 -> 0 까지 떨어질 수 있게. 

  const handleSideEffect = () => {

    const count = document.querySelector('.count') as HTMLOutputElement;

    const timeout = setInterval(()=>{
      
      --count.value

      if(count.value <= 0){
        clearInterval(timeout)
      }
      
    })
  }


  

  // sideEffect => useEffect




  return (
    <>
      <details open>
        <summary>
          <b>이벤트 핸들러와 사이드 이팩트</b>
        </summary>
        <p>이벤트 핸들러는 사이드 이팩트를 위한 최고의 포지션입니다.</p>
        <p>
          함수를 랜더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에 <br />
          무언가를 변경하는데 최적의 위치입니다 👍
        </p>
        <div className="countDown">
          <button type="button" onClick={handleSideEffect}>카운트 다운</button>
          <output className="count">100</output>
        </div>
      </details>
    </>
  )
}
export default EventWithSideEffects