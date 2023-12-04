import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }){
    const modalRef = useRef();
    const [modalContent,setModalContent] = useState(null);
    const closeModal = () => {
        setModalContent(null);
    };
    const contextValue = {
        modalRef,
        modalContent,
        setModalContent,
        closeModal
    };
    return (
        <>
            <ModalContext.Provider value={contextValue}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef}/>
        </>
    )
}
export function Modal(){
    const {modalRef, modalContent, closeModal} = useContext(ModalContext);
    if(!modalRef || !modalRef.current || !modalContent) return null;
    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={closeModal}>
                <div id="modal-content">
                    {modalContent}
                </div>
            </div>
        </div>,
        modalRef.current
    );
}
export const useModal = () => useContext(ModalContext);