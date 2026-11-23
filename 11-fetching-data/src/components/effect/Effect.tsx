import { useEffect, useState } from "react";



function UserList() {
  
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  

  useEffect(()=>{

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users",{signal: controller.signal})
    .then( res => {
      if(!res.ok) throw new Error('네트워크 응답 오류');
      return res.json();
    })
    .then( (data:User[]) => {
      setUsers(data);
      setLoading(false);
    })
    .catch( (err:Error) => {
      if(err.name === 'AbortError') return;

      console.error('데이터 가져오기 실패',err);
      setLoading(false);
      setError(err);
    });

    return ()=> controller.abort();
    
  },[])

  if(loading) return <p>로딩 중....</p>;
  if(error) return <p>❌ 에러 발생!!! : {error.message} ❌</p>;
  

  return (
    <ul>
      {
        users && users.map((user)=>
          <li key={user.id}>{user.name} ({user.email})</li>
        )
      }
    </ul>
  )
}
export default UserList