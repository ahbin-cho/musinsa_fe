import "./SearchFilters.css";

export const SearchFilters = () => {
  return (
    <div className="common-search-filters">
      <button className="type-button">
        검색
        <img src="./Search.png" alt="search" />
      </button>
      <button className="type-button">세일상품</button>
      <button className="type-button">단독상품</button>
      <button className="type-button">품절포함</button>
    </div>
  );
};
