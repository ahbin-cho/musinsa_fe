import { useCallback, useState } from "react";
import { SearchList } from "../SearchList";
import "./SearchFilters.css";

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
        <div className="search-filters-type">
          {/* <button className="type-button" onClick={onClickSearchProductName}>
          ??????
          <img src="./Search.png" alt="search" />
        </button> */}
          <button
            className={`type-button ${isClickSale ? "button-active" : ""}`}
            onClick={onClickBtnFilterSale}
          >
            ????????????
          </button>
          <button
            className={`type-button ${isClickExclusive ? "button-active" : ""}`}
            onClick={onClickBtnFilterExclusive}
          >
            ????????????
          </button>
          <button
            className={`type-button ${isClickSoldout ? "button-active" : ""}`}
            onClick={onClickBtnFilterSoldout}
          >
            ????????????
          </button>
        </div>

        {filterList.size > 0 && (
          <div className="tag-filters">
            {Array.from(filterList).map((filter) => {
              return (
                <div className="tag" key={filter}>
                  {filter === "isSale"
                    ? "????????????"
                    : filter === "isExclusive"
                    ? "????????????"
                    : "????????????"}

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
      </div>
      <SearchList filter={filterList} />
    </>
  );
};
