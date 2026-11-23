import { useEffect, useState } from "react";



function UserList() {
  
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name:'tiger'});
  

  // useEffect(fn) => 매 렌더링마다 실행
  // useEffect(fn,[]) => 첫 렌더링(마운트)이후 딱 한 번만
  // useEffect(fn,[count]) => count가 지난번값과 같지 않다면 호출
  
  // useEffect => 컴포넌트 안에서 [이벤트 핸들러를 제외한] 일반 함수 또 만들고 싶을 때 




  useEffect(()=>{

    console.log('useEffect 실행!');

    const id = setInterval(() => {
      console.log('실행');
    },1000)

   
    return () => {

      
      console.log('🫧 청소를 깨끗이 하자! 🧹');
      clearInterval(id);

    }
    
  },[count])



  console.log('🐯 렌더링됨.');


  
  return (
    <div>
      <p>카운트 : {count}</p>
      <button type="button" onClick={()=>setCount(count + 1)}> +1 </button>
    </div>
  )
}
export default UserList