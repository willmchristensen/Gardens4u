import Garden from "../components/Garden";
import Vegetables from "../components/Vegetables";
import {useEffect, useState} from 'react';

function Main(){

    const [vegs,setVegs] = useState(Array.from({length:5}, () => Array(5).fill(null)));
    const [row,setRow] = useState(Array(5).fill(null));
    const [emptyRow, setEmptyRow] = useState(0);
    useEffect(()=>{
        let emptySpace = row.indexOf(null);
        let fullRow = emptySpace === -1;
        console.log('row in useEffect', row)

        let cloneOfVegs = [...vegs];
        cloneOfVegs[emptyRow] = row;
        setVegs(cloneOfVegs);

        let roomLeftInGarden = emptyRow <= 5; 
        if(roomLeftInGarden && fullRow){
            let cloneOfVegs = [...vegs];
            cloneOfVegs[emptyRow] = row;
            setVegs(cloneOfVegs);
            setRow(Array(5).fill(null));
            let newEmptyRow = vegs.findIndex((row) => row[0] === null);
            setEmptyRow(newEmptyRow);
        }
    },[row]);

    const handleClick = (veggie) => { 
        let emptySpace = row.indexOf(null);
        let roomForPlant = emptySpace !== -1;
        if(roomForPlant){
            let cloneOfRow = [...row];
            cloneOfRow[emptySpace] = veggie;
            setRow(cloneOfRow);
        }
    }
    
    return(
        <>
            <Garden vegs={vegs} row={row}/>
            <Vegetables handleClick={handleClick}/>
        </>
    )

}
export default Main;