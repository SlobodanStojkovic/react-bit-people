import "./Search.css";

export const Search = ({ onChange, inputValue }) => {


    
    return (
        <input className="inputField" value={inputValue} onChange={onChange} id="searchInput" placeholder="Search for ..." type="text" />
    )
}