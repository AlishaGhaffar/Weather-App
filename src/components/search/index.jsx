import Weather from "../weather";


export default function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="search-engine">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
}