import { useState, type CSSProperties } from 'react';
import './UserPage.css';
import UserList from './components/UserList';
import userData from '@/data/users.json';
import UserSearchBox from './components/UserSearchBox';


function UserPage() {
  
  // [상태 선언]
  const [searchTerm, setSearchTerm] = useState('');


  // [상태 업데이트]
  // 컴포넌트 상태를 업데이트 하는 곳 
  const handleSearch = (userInput:string) => setSearchTerm(userInput);


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

      <UserSearchBox 검색기능={handleSearch}/>

      <UserList users={userData}/>

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