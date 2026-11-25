import S from './NotFound.module.css';

function NotFound() {
  return (
    <div className={S.container}>
      <h1 lang="en">[404] Not Found</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  );
}

export default NotFound;
