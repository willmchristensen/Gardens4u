import Plant from "./Plant";
function Row({row}){

    return (
        <div className="garden-row">
            {
                row.map(plant => <Plant plant={plant} />)
            }
        </div>
    )

}
export default Row;