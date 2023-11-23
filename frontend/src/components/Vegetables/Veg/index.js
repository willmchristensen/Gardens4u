import './Veg.css';

function Veg({veg}){
    return(
        <div className="veg-container">
            <h1>{veg.title}</h1>
            <h2>price: ${veg.price}</h2>
            <p>{veg.description}</p>
        </div>
    )
}

export default Veg;