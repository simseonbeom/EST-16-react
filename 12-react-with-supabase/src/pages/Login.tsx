import { useId } from 'react';
import S from './Login.module.css';


function Login() {
  const userId = useId();
  const pwId = useId();
  
  // 1. 상태 설정하기
  // 2. 이벤트 바인딩하기
  // 3. supabase 통신하기 
  // 4. redirect 하기 


  return (
    <div className={S.container}>
      <div>
        <form>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input 
              id={userId}
              type="email" 
              name="email"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호:</label>
            <input 
              id={pwId}
              type="password" 
              name="password"
              required
              aria-required="true"
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  )
}
export default Login