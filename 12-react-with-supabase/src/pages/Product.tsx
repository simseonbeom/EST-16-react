import { useEffect, useRef } from 'react';
import S from './Product.module.css'
import gsap from 'gsap'
import supabase from '@/supabase/supabase'

function Product() {


  supabase.from('products').select('*').then(console.log);
  

  const UL = useRef<HTMLUListElement>(null);
 
  useEffect(()=>{
    if(!UL.current) return;
 
    const ctx = gsap.context(() => {
      gsap.fromTo(UL.current!.children,{
        y:30,
        opacity:0
      },{
        y:0,
        opacity:1,
        stagger:0.1
      })
    });
 
    return () => ctx.revert();
  }, [])

  return (
    <div className={S.container}>
      <ul ref={UL}>
        <li>
          <a href="/">
            <figure>
              <img src="https://framerusercontent.com/images/b7G2tciOtF1moIuVP1RhaGIQKKU.jpg" alt="" />
            </figure>
            <span className={S.brand}>오버핏 겨울 코트</span>
            <span className={S.description}>가볍고 따뜻한 겨울 아우터, 어깨선이 자연스럽게 떨어지는 오버핏</span>
            <span className={S.price}>399,000</span>
            <div>
              <span className={S.discount}>20%</span>
              <span className={S.realPrice}>325,000</span>
            </div>
          </a>
        </li>
         <li>
          <a href="/">
            <figure>
              <img src="https://framerusercontent.com/images/b7G2tciOtF1moIuVP1RhaGIQKKU.jpg" alt="" />
            </figure>
            <span className={S.brand}>오버핏 겨울 코트</span>
            <span className={S.description}>가볍고 따뜻한 겨울 아우터, 어깨선이 자연스럽게 떨어지는 오버핏</span>
            <span className={S.price}>399,000</span>
            <div>
              <span className={S.discount}>20%</span>
              <span className={S.realPrice}>325,000</span>
            </div>
          </a>
        </li>
         <li>
          <a href="/">
            <figure>
              <img src="https://framerusercontent.com/images/b7G2tciOtF1moIuVP1RhaGIQKKU.jpg" alt="" />
            </figure>
            <span className={S.brand}>오버핏 겨울 코트</span>
            <span className={S.description}>가볍고 따뜻한 겨울 아우터, 어깨선이 자연스럽게 떨어지는 오버핏</span>
            <span className={S.price}>399,000</span>
            <div>
              <span className={S.discount}>20%</span>
              <span className={S.realPrice}>325,000</span>
            </div>
          </a>
        </li>
         <li>
          <a href="/">
            <figure>
              <img src="https://framerusercontent.com/images/b7G2tciOtF1moIuVP1RhaGIQKKU.jpg" alt="" />
            </figure>
            <span className={S.brand}>오버핏 겨울 코트</span>
            <span className={S.description}>가볍고 따뜻한 겨울 아우터, 어깨선이 자연스럽게 떨어지는 오버핏</span>
            <span className={S.price}>399,000</span>
            <div>
              <span className={S.discount}>20%</span>
              <span className={S.realPrice}>325,000</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Product