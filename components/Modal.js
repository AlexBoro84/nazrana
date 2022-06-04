import {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import {GrFormClose} from 'react-icons/gr'
const Modal = ({show, onClose, children}) => {

    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const modalContent = show ? (
        <div className='absolute top-0 left-0 h-full w-full flex justify-center z-30 items-center bg-[#000000b3]'>
            <div className='md:w-5/12 w-11/12 bg-white rounded-sm shadow-lg md:px-14 px-6 py-6 relative'>
                <GrFormClose className='absolute cursor-pointer right-5 top-4 text-2xl' onClick={onClose}/>
                {children}
            </div>
        </div>
    ): null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal