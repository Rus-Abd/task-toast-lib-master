import { forwardRef, useState } from "react";
import { ReactDOM } from "react-dom";

const ToastContainer=forwardRef(rootElement,ref)=>{
    const [portal,usePortal]=useState()

    return {
        ReactDOM.createPortal()
    }
}
export default ToastContainer