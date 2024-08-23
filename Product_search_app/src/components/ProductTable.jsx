import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
function ProductTable(){
    return(
        <table className="w-full">
            <tr>
                <th className="p-2 text-left bg-slate-100">Name</th>
                <th className="p-2 text-right bg-slate-100">Price</th>
            </tr>
            <ProductCategoryRow category="Fruits" />
            <ProductRow Name="Apple" Price="$1" stocked={true} />
            <ProductRow Name="Apple" Price="$1" stocked={false} />
            <ProductCategoryRow category="Vegetables" />
        </table>
    )
}
export default ProductTable;