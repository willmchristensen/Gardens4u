function Plant({plant}){
    // console.log(plant)
    return(
        <div className="garden-column">
            <h1>{plant?.title.slice(0,1)}</h1>
        </div>
    )
}
export default Plant;