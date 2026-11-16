import { useState, type CSSProperties } from 'react';
import './UserPage.css';
import UserList from './components/UserList';
import userData from '@/data/users.json';
import UserSearchBox from './components/UserSearchBox';
import InstantSearch from './components/InstantSearch';


function UserPage() {
  
  // [상태 선언]
  const [searchTerm, setSearchTerm] = useState('');
  const [users] = useState(userData);
  const [isInstantSearch,setIsInstantSearch] = useState(false);


  // [상태 업데이트]
  // 컴포넌트 상태를 업데이트 하는 곳 
  const handleSearch = (userInput:string) => setSearchTerm(userInput);
  const handleReset = () => setSearchTerm('');
  const handleToggleInstantSearch = () => setIsInstantSearch(!isInstantSearch)

  
  // [파생 상태]
  // 검색된 유저 목록 
  // const 검색된유저목록 = users.filter((user)=> user.name.includes(searchTerm) || user.email.includes(searchTerm) || user.city.includes(searchTerm) )

  // every 모두 만족해야 true (and)
  // some  하나라도 만족하면 true (or)
  const searchedUserList = users.filter((user)=> 
    [user.name, user.email, user.city].some(
      (field)=> field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  console.log( isInstantSearch );
  

  return (
    <div className='UserPage'>

      <InstantSearch onToggle={handleToggleInstantSearch}/>

      <UserSearchBox
       onSearch={handleSearch}
       searchTerm={searchTerm}
       onReset={handleReset}
      />

      <UserList users={searchedUserList}/>

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