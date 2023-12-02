import { useState } from 'react';
import './Garden.css';
import Vegetables from '../Vegetables';
import Row from './Row';

function Garden({vegs, row}){

    const handleEdit = () => {
        setEdit(!edit);
    }

    const [edit,setEdit] = useState(false);
    const gardenWrapper = edit ? 'garden-wrapper-edit' : 'garden-wrapper';
    const editButtonText = edit ? 'Save-Garden' : 'Edit-Garden';

    return (
        <div className="garden-area-container">
            <h1>GARDEN</h1>
            <div className={gardenWrapper}>
                <div className="garden-container">
                    {
                        vegs.map((row,index) => {
                            return (
                                <Row 
                                    edit={edit}
                                    row={row} 
                                    key={index}

                                />    
                            )
                        })
                    }
                </div>
            </div>
            <div className="buttons-container">
                <button 
                    className="main-button"
                    onClick={() => handleEdit()}
                >
                    {editButtonText}
                </button>
            </div>
        </div>
    )

}
export default Garden;