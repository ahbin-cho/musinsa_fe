import { useCallback, useState } from "react";
import "./SearchFilters.css";
import { SearchList } from "./SearchList";

export const SearchFilters = () => {
  const [filterList, setFilterList] = useState(new Set());
  const [isClickSale, setIsClickSale] = useState(false);
  const [isClickExclusive, setisClickExclusive] = useState(false);
  const [isClickSoldout, setIsClickSoldout] = useState(false);
  const [isVisibleSearchInput, setIsVisibleSearchInput] = useState(false);

  const onHandlerFilter = useCallback(
    (key, isChecked) => {
      if (isChecked) {
        filterList.add(key);
        setFilterList(filterList);
      } else if (!isChecked && filterList.has(key)) {
        filterList.delete(key);
        setFilterList(filterList);
      }
    },
    [filterList]
  );

  const onClickBtnFilterSale = useCallback(() => {
    setIsClickSale(!isClickSale);
    onHandlerFilter("isSale", !isClickSale);
  }, [isClickSale, onHandlerFilter]);

  const onClickBtnFilterExclusive = useCallback(() => {
    setisClickExclusive(!isClickExclusive);
    onHandlerFilter("isExclusive", !isClickExclusive);
  }, [isClickExclusive, onHandlerFilter]);

  const onClickBtnFilterSoldout = useCallback(() => {
    setIsClickSoldout(!isClickSoldout);
    onHandlerFilter("isSoldOut", !isClickSoldout);
  }, [isClickSoldout, onHandlerFilter]);

  const onClickBtnTagDelete = useCallback(
    (key) => {
      if (key === "isSale") {
        onClickBtnFilterSale();
      } else if (key === "isExclusive") {
        onClickBtnFilterExclusive();
      } else if (key === "isSoldOut") {
        onClickBtnFilterSoldout();
      }
    },
    [onClickBtnFilterSale, onClickBtnFilterExclusive, onClickBtnFilterSoldout]
  );

  const onClickSearchProductName = useCallback(() => {
    setIsVisibleSearchInput(!isVisibleSearchInput);
  }, [isVisibleSearchInput]);

  return (
    <>
      <div className="common-search-filters">
        <button className="type-button" onClick={onClickSearchProductName}>
          검색
          <img src="./Search.png" alt="search" />
        </button>
        <button
          className={`type-button ${isClickSale ? "button-active" : ""}`}
          onClick={onClickBtnFilterSale}
        >
          세일상품
        </button>
        <button
          className={`type-button ${isClickExclusive ? "button-active" : ""}`}
          onClick={onClickBtnFilterExclusive}
        >
          단독상품
        </button>
        <button
          className={`type-button ${isClickSoldout ? "button-active" : ""}`}
          onClick={onClickBtnFilterSoldout}
        >
          품절포함
        </button>
      </div>

      {filterList.size > 0 && (
        <div className="tag-filters">
          {Array.from(filterList).map((filter) => {
            return (
              <div className="tag" key={filter}>
                {filter === "isSale"
                  ? "세일상품"
                  : filter === "isExclusive"
                  ? "단독상품"
                  : "품절포함"}

                <button
                  className="btn-tag-delete"
                  onClick={() => {
                    onClickBtnTagDelete(filter);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      )}
      <SearchList filter={filterList} />
    </>
  );
};
