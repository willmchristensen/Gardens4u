import { useModal } from "../../context/Modal";

function OpenModalButton({buttonText,modalContent}){

    const {setModalContent} = useModal();

    const handleClick = () => {
        setModalContent(modalContent)
    }

    return(
        <button
            onClick={() => handleClick()}
        >
            {buttonText}
        </button>
    )

}
export default OpenModalButton;