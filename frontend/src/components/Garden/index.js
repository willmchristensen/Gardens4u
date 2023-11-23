import Vegetables from '../Vegetables';
import './Garden.css';
import Row from './Row';

function Garden({vegs, row}){

    console.log('row',row);
    console.log('vegs', vegs);

    return (
        <>
            <h1>GARDEN</h1>
            <div className="garden-wrapper">
                <div className="garden-container">
                    {
                        vegs.map((row,index) =>   <Row row={row} key={index}/>)
                    }
                </div>
            </div>
        </>
    )

}
export default Garden;