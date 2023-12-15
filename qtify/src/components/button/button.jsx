import React from 'react'
import  './button.css'
function Button({children}){
    return(
        <>
        <button className="button-button">{children}</button> 
        </>
    )
}
export default Button;