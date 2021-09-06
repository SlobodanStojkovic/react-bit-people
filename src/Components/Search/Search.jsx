import "./Search.css";

export const Search = ({ onChange, inputValue }) => {
  return (
    <div className="mx-5">
      <i class="fas fa-search"></i>
      <input
        className="inputField"
        value={inputValue}
        onChange={onChange}
        id="searchInput"
        placeholder="Search for ..."
        type="text"
      />
    </div>
  );
};
