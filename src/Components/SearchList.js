/* eslint-disable array-callback-return */
import { useState, useRef, useEffect, useCallback } from "react";
import "./SearchList.css";

const options = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,
};

export const SearchList = (props) => {
  const [bottom, setBottom] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState(0);

  const bottomObserver = useRef(null);

  const getSearchList = useCallback(async ({ searchPage = 0, param }) => {
    try {
      const response = await fetch(
        `https://static.msscdn.net/musinsaUI/homework/data/goods${searchPage}.json`
      );
      const { data } = await response.json();

      setSearchList((prev) => {
        let tempArr = [...prev, ...data.list];
        tempArr = tempArr.filter((item, index) => {
          if (
            tempArr.findIndex((d) => {
              return d.goodsNo === item.goodsNo;
            }) === index
          ) {
            return item;
          }
        });

        if (param.has("isSale")) {
          tempArr = tempArr.filter((item) => {
            if (item.isSale) {
              return item;
            }
          });
        }
        if (param.has("isExclusive")) {
          tempArr = tempArr.filter((item) => {
            if (item.isExclusive) {
              return item;
            }
          });
        }
        if (!param.has("isSoldOut")) {
          tempArr = tempArr.filter((item) => {
            if (!item.isSoldOut) {
              return item;
            }
          });
        }

        return tempArr;
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }
  }, []);

  useEffect(() => {
    getSearchList({ searchPage: page, param: props.filter });
  }, [page, getSearchList]);

  useEffect(() => {
    setPage(0);
    setSearchList([]);
  }, [props]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    bottomObserver.current = observer;
    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  return (
    <div className="search-list-page">
      {searchList.map((item) => {
        const {
          goodsNo,
          goodsName,
          price,
          brandName,
          imageUrl,
          normalPrice,
          isSale,
          isExclusive,
          saleRate,
        } = item;
        return (
          <div className="search-list-item" key={goodsNo}>
            <img
              src={imageUrl}
              alt={goodsNo}
              onError={(e) => {
                return (e.target.src =
                  "https://image.msscdn.net/musinsaUI/homework/data/img.jpg");
              }}
            />
            {isExclusive && <div className="exclusive-label">단독</div>}
            <div className="item-info">
              <div className="brand-name">{brandName}</div>
              <div className="product-name">{goodsName}</div>
              <div className="price">
                {isSale ? (
                  <>
                    <div className="sale-price">
                      {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                      <span className="sale-rate">{saleRate}%</span>
                    </div>
                    <div className="normal-price">
                      {normalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div ref={setBottom} />
    </div>
  );
};
