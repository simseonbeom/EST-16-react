import { useCallback, useState } from "react";
import Child from "./Child";

// 리액트 : 부모 컴포넌트를 랜더링하면 자식 컴포넌트가 리랜더링이 된다. 
// 잘못됐다 x 그냥 이렇게 동작한다.

// 내 자식은 리렌더링될 필요가 없는데? memo(컴포넌트)

// useCallback 함수를 기억하기(memo) 위해 

// useCallback(함수, [의존성]), useEffect도 똑같이 나옴 

// [count] -> count값이 변경되면 함수를 다시 기억 
// 첫 랜더링 -> 함수를 기억해 둠
// 다음 랜더링 -> 의존성 있나? 의존성이 지난번이랑 똑같나? 똑같은 함수 
//             의존성이 바꼈다?  새 함수를 다시 기억하고 돌려줌 
// [] -> 비교할 게 없으니 항상 같은 함수 기억하고 있을게~

function Parent() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('clicked!');
    
  },[])

  return (
    <div>
      <h1>Parent Count : {count}</h1>
      <button type="button" onClick={()=> setCount(count + 1)}> +1 </button>
      <hr />
      <Child label='야호' onClick={handleClick}/>
    </div>
  )
}
export default Parent