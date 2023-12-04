import Veg from "./Veg";
import './Vegetables.css';
import OpenModalButton from "../OpenModalButton";

let veggies = [
    {   title:'Tomato',
        price:5.55, 
        description:'descriptiondescriptiondesdescription',
        
    },
    {   title:'Lettuce',
        price:4.55, 
        description:'descriptiondescriptiondesdescription',
        
    },
    {   title:'Squash',
        price:3.55, 
        description:'descriptiondescriptiondesdescription',
        
    },
    {   title:'Broccoli',
        price:6.55, 
        description:'descriptiondescriptiondesdescription',
        
    },
];
function Vegetables({handleClick}){

    return(
        <div className="vegetables-wrapper">
            <div className="vegetables-container">
                {
                    veggies.map((v,index) => {
                        return(
                            <button 
                                key={index} 
                                onClick={() =>handleClick(v)}
                            >
                                <Veg veg={v}/>
                            </button>
                        )
                    })
                }
            </div>
            <h1>modals</h1>
        </div>
    )

}

export default Vegetables;