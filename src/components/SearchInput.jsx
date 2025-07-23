const SearchInput = ({setSearchQuery}) => {
  return (
    <div class="search_container">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search blogs by title..."
      />
    </div>
  );
};

export default SearchInput;
