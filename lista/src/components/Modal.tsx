import React from "react"
//Css
    import style from "../style.css/Modal.module.css"


//Inteface props
interface Props{
    children:React.ReactNode
}



export const Modal = ({children}:Props) =>{
    return(
        <div id="modal"> 
            <div className={style.fade}></div>
            <div className={style.Modal}>
                <h2>Texto Modal</h2>
                {children}
            </div>
        </div>
    )
}