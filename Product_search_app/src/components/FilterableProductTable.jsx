import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductRow from "./ProductRow";

function FilterableProductTable(){
    return (
        <div className="w-96 border">
            <SearchBar />
            <ProductTable />
        </div>
    )
}
export default FilterableProductTable;