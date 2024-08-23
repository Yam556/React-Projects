function ProductRow({Name, Price, stocked}){
    return(
        <tr className={stocked ? "text-Black" : "text-red-500" }>
            <td>{Name}</td>
            <td>{Price}</td>
        </tr>
    )
}
export default ProductRow;