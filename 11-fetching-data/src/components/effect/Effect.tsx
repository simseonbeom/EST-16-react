import useUsers from "@/hook/useUsers";



// 컴포넌트는 "무엇을 보여줄지" / 훅은 "어떻게 가져올지"
// 관심사의 분리 

function UserList() {
  
  // const [count, setCount] = useState(0);

  const {loading, error, users} = useUsers();

  // use(promise) + Suspense

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