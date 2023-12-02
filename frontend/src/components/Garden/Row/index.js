import Plant from "./Plant";
function Row({edit,row}){

    return (
        <div className='garden-row'>
            {
                row.map(plant => <Plant edit={edit} plant={plant} />)
            }
        </div>
    )

}
export default Row;