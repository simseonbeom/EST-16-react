import { useContext, useRef } from 'react';
import S from './Product.module.css'
import gsap from 'gsap'
import useProducts from '@/hook/useProducts';
import { useGSAP } from '@gsap/react';
import { useAuth } from '@/components/auth/AuthProvider';
import { RouterContext } from '@/router/RouterProvider';

function Product() {


  const {products, loading} = useProducts();

  const { isAuth } = useAuth();

  const UL = useRef<HTMLUListElement>(null);
  
  const {setHistoryRoute} = useContext(RouterContext)!;

  useGSAP(()=>{

    if(!UL.current || !UL.current.children) return ;

    gsap.fromTo('li',{
      y:30,
      opacity:0
    },{
      y:0,
      opacity:1,
      stagger:0.1
    })
  },{dependencies:[products,isAuth],scope:UL, revertOnUpdate:true});

  const handleRouter = (e:React.MouseEvent<HTMLAnchorElement>, id:string) => {
    e.preventDefault();

    history.pushState(null,'',`/Product/${id}`)
    setHistoryRoute(`/Product/${id}`)
  }

  const handleCreate = () => {
    history.pushState(null,'','/Create');
    setHistoryRoute('/Create');
  }
  
  if(loading) return <p className={S.loading}>loading.....</p>

  if(!isAuth){
    return (
      <div className={S.invalid}>
        <span style={{fontSize:'10rem'}}>⚠️</span>
        <h3>상품 목록은 로그인 후 이용 가능합니다.</h3>
        <a href="">설마? 아직도 효블리 회원이 아니세요??????</a>
      </div>
    )
  }

  return (
    <div className={S.container}>
      <div className={S.toolbar}>
        <button className={S.createButton} type='button' onClick={handleCreate}>
          + 상품 등록
        </button>
      </div>
      <ul ref={UL}>
        {
          products && 
          products.map((item)=>(
            <li key={item.id}>
              <a href={`/Product/${item.id}`} onClick={(e)=> handleRouter( e, item.id )}>
                <figure>
                  <img src={item.image_url} alt="" />
                </figure>
                <span className={S.brand}>{item.name}</span>
                <span className={S.description}>{item.description}</span>
                <span className={S.price}>{item.price.toLocaleString()}원</span>
                <div>
                  <span className={S.discount}>{item.sale}%</span>
                  <span className={S.realPrice}>{(item.price - (item.price * item.sale * 0.01)).toLocaleString()}원</span>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Product