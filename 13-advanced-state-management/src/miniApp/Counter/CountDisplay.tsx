import { memo } from 'react';
import S from './style.module.css'
import { useCountStore } from './@store';

function CountDisplay() {

  // const count = 0;

  // const { count } = useCountStore();


  // selector 구독 방식
  const count = useCountStore( s => s.count );

  console.log(' counter display ');
  

  return (
    <output className={S.output}>{count}</output>
  )
}
export default memo(CountDisplay)
