import "./SearchList.css";

// {
//     "goodsNo": 1759350,
//     "goodsName": "[SET] 베이직 라인 셋업",
//     "price": 59000,
//     "brandName": "에프씨엠엠",
//     "imageUrl": "https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg",
//     "linkUrl": "https://store.musinsa.com/app/goods/1759350",
//     "brandLinkUrl": "https://www.musinsa.com/brands/fcmm",
//     "normalPrice": 74000,
//     "isSale": true,
//     "saleRate": 20,
//     "isSoldOut": false,
//     "isExclusive": false
//   }

export const SearchList = () => {
  return (
    <div className="search-list-page">
      <div className="search-list-item">
        <img src="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg" />
        <div className="item-info">
          <div className="brand-name">브랜드명</div>
          <div className="product-name">상품명</div>
          <div className="price">
            <div>
              할인가격
              <span>100%</span>
            </div>
            정가
          </div>
        </div>
      </div>
      <div className="search-list-item">
        <img src="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg" />
      </div>
      <div className="search-list-item">
        <img src="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg" />
      </div>
      <div className="search-list-item">
        <img src="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg" />
      </div>
    </div>
  );
};
