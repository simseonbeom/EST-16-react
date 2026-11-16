import "./ProductPage.css";

/*
  [실습] 아래 마크업을 컴포넌트로 분리하고, 상태를 연결해 보세요.
  - 상품 데이터: ./data.ts 의 productData
  - 검색어로 상품 이름 필터링
  - "재고 있는 상품만 보기" 체크 시 재고 있는 상품만 표시
  - 표시 개수 / 전체 개수 출력
*/

function ProductPage() {
  return (
    <div className="ProductPage">
      <h1>상품 목록</h1>

      <div className="ProductSearch">
        <label htmlFor="product-search">상품 검색</label>
        <input id="product-search" type="search" placeholder="상품 이름 입력" />
      </div>

      <div className="StockFilter">
        <input type="checkbox" id="stock-filter" />
        <label htmlFor="stock-filter">재고 있는 상품만 보기</label>
      </div>

      <ul className="ProductList">
        <li>
          <strong>무선 키보드</strong>
          <span className="price">45,000원</span>
          <span className="badge">재고 있음</span>
        </li>
        <li className="sold-out">
          <strong>무선 마우스</strong>
          <span className="price">25,000원</span>
          <span className="badge">품절</span>
        </li>
        <li>
          <strong>모니터 받침대</strong>
          <span className="price">32,000원</span>
          <span className="badge">재고 있음</span>
        </li>
      </ul>

      <p className="ProductCount">
        전체 <b>8</b>개 중 <b>3</b>개 표시
      </p>
    </div>
  );
}
export default ProductPage;
