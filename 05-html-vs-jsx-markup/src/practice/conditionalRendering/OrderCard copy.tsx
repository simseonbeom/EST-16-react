
import type { JSX } from 'react';
import type { Order } from './data';

interface Props {
  order: Order;
}

const statusLabels: Record<Order['status'], string> = {
  pending: '결제 대기',
  shipping: '배송 중',
  delivered: '배송 완료',
  canceled: '주문 취소',
};

function OrderCardSolution({ order }: Props): JSX.Element {
  const {
    id,
    productName,
    price,
    status,
    isMember,
    couponCount,
    requestMessage,
  } = order;

  // 1. if + 조기 반환
  if (status === 'canceled') {
    return (
      <article className="orderCard canceled">
        <p>주문 {id} 은(는) 취소되었습니다.</p>
      </article>
    );
  }

  return (
    <article className={`orderCard ${status}`}>
      <header>
        <span className="orderId">{id}</span>

        {/* 2. 삼항 연산자 */}
        <span className={isMember ? 'badge member' : 'badge'}>
          {isMember ? '회원' : '비회원'}
        </span>
      </header>

      <h2>{productName}</h2>
      <p className="price">{price.toLocaleString()}원</p>

      <p className="status">
        {/* 3. && 조건부 렌더링 */}
        {status === 'shipping' && (
          <img src="/icons/spinner.svg" alt="" />
        )}
        {statusLabels[status]}
      </p>

      {/* 4. 숫자 조건부 렌더링 */}
      {couponCount > 0 && (
        <p className="coupon">
          🎟️ 쿠폰 {couponCount}장 사용
        </p>
      )}

      {/* 5. 선택적 속성 */}
      {requestMessage && (
        <p className="message">📝 {requestMessage}</p>
      )}

      {/* 6. 삼항 연산자 */}
      <button type="button">
        {status === 'delivered' ? '리뷰 쓰기' : '배송 조회'}
      </button>
    </article>
  );
}

export default OrderCardSolution;
