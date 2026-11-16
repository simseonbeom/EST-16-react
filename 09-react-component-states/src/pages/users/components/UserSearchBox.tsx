



// 타입 지정하고 이벤트 연결 
// 목표는 onSearch에 input값을 전달하자 

interface Props {
  검색기능: (userInput:string) => void;
}


function UserSearchBox({검색기능}:Props) {

  


  return (
    <form className="UserSearchBox" onSubmit={()=> 
      검색기능()
    }>
      <div className="control">
        <label htmlFor="a-20">사용자 검색</label>
        <input type="search" id='a-20' placeholder='사용자 정보 입력' />
      </div>
      <button type="submit">찾기</button>
      <button type="reset">목록 초기화</button>
    </form>
  )
}
export default UserSearchBox