import { useId, useState } from 'react';
import S from './Login.module.css';
import NavLink from '@/components/NavLink';

function Login() {

  const emailId = useId();
  const pwId = useId();

  // controlled component  state가 value에 연결 + onChange로 state 제어
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={S.container}>
      <form>
        <h2>로그인</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input 
            type="email" 
            required 
            id={emailId}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input 
            type="password" 
            required 
            id={pwId}
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
        <p>
          아직 회원이 아니신가요?
          <NavLink to="/Register">회원가입</NavLink>
        </p>
      </form>
    </div>
  )
}
export default Login
