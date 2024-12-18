import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const SearchMovies = dados.filter((data) => data.title.startsWith(search));
  return (
    <div className="gap-4 flex grid-row- ">
      <input
        className="rounded-xl bg-leftViolet-100 "
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
