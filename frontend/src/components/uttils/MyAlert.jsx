"use client"
import { AiFillInfoCircle } from "react-icons/ai"; 
import { RiErrorWarningFill } from "react-icons/ri"; 
import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { AiFillCheckCircle } from "react-icons/ai"; 
import { Alert } from "../../MTailwind"
import { useEffect, useState } from "react";

const MyAlert = ({type, message}) => {
    const [openAlert,setOpen] = useState(false)
    
    useEffect(()=>{

        const interval  = setInterval(()=>{
            setOpen(true)
        },300)
        setOpen(false)
        return ()=> clearInterval(interval)
    },[])

    let color;
    let icon;
    switch(type){
        case "success": 
            color = 'green';
            icon = <AiFillCheckCircle className="w-6 h-6" />;
            break;
        case "error":
            color = 'red';
            icon = <AiOutlineCloseCircle className="w-6 h-6"/>;
            break;
        case "warnig":
            color = 'orange';
            icon = <RiErrorWarningFill className="w-6 h-6" />;
            break;
        default:
            color= "gray";
            icon = <AiFillInfoCircle className="w-6 h-6" />
            break;
    }

    return(
        <Alert icon= {icon} color={color} variant="gradient" open={openAlert}>
           {message}
        </Alert>
    )
}

export default MyAlert