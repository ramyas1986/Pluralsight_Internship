import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

// background color: 'Primary',
        // 'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
        // 'Dark'
export default function AutoHideToast(props) {
    const toastConfig = { 
        show: true,
        msg: props.msg ? props.msg : "Hurray!! this is test toast message.", 
        bg: props.bg ? props.bg :  "success", 
        delay: props.delay ? props.delay : 3000,
        textColor: props.textColor ? props.textColor : "text-white"
    };
    const hideShowRef = props.callbackOnHide ? props.callbackOnHide : null;
    const [toast, setToast] = useState(toastConfig);

    function setToastTimeout() {
        setTimeout(function() {
            setToast({ show: false });
            if(hideShowRef) hideShowRef();
        }, toastConfig.delay);
    }

    return (
        <>
        <ToastContainer position="top-center" >
            <Toast bg={toast.bg} onClose={() => setToast({ show: false })} defaultValue={toastConfig.show} show={toast.show} style={{ marginTop: "10px", textAlign:"center" }}>
                <Toast.Body className={toast.textColor}>{toast.msg}</Toast.Body>
            </Toast>
        </ToastContainer>
        {setToastTimeout()}
        </>
    );

}
