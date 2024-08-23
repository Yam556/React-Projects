function SearchBar(){
    return(
        <form className="p-4">
            <div><input type="Search" className="border text-2xl " placeholder="Search..." /></div>
            <label htmlFor="inStock">
                <input type="checkbox" name="inStock" id="inStock" />
                Only shows filterable Product
            </label>
            
        </form>
    )
}
export default SearchBar;