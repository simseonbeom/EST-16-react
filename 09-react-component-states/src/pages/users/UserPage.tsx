import type { CSSProperties } from 'react';
import './UserPage.css';
import UserList from './components/UserList';
import userData from '@/data/users.json';


function UserPage() {

  console.log( userData );
  
  
  return (
    <div className='UserPage'>

      <header className='UserPage__header'>
        <h1>사용자 목록</h1>
        <div className="formControl InstantSearch">
          <label htmlFor="a-10">
            <input type="checkbox" id='a-10'/>
          </label>
        </div>
      </header>

      <form className="UserSearchBox">
        <div className="control">
          <label htmlFor="a-20">사용자 검색</label>
          <input type="search" id='a-20' placeholder='사용자 정보 입력' />
        </div>
        <button type="submit">찾기</button>
        <button type="reset">목록 초기화</button>
      </form>

      <UserList/>

      <div className="UserListCount">
        <span className="text">
          <span>검색 결과</span>
          <span data-testid="user-list-count">
            23 / <b>23</b>
          </span>
        </span>
        <div className="bar">
          <span style={{"--ratio":1} as CSSProperties}></span>
        </div>
      </div>


    </div>
  )
}
export default UserPage