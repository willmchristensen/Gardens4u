import {useEffect, useState} from 'react';

function Plant({edit,plant}){

    const [plantContainer,setPlantContainer] = useState("plant-container");

    useEffect(() => {
        let interval;
        if(edit){
            interval = setInterval(() => {
                setPlantContainer(prevClass => 
                    prevClass === "plant-container" ? "plant-container-edit" : "plant-container"
                );
            },1000)
        }
        return () => {
            clearInterval(interval)
        }
    },[edit])

    return(
        <div className={plantContainer}>
            <h1>{plant?.title.slice(0,1)}</h1>
        </div>
    )

}
export default Plant;