import React from "react"
//Css
    import style from "../style.css/Modal.module.css"


//Inteface props
    interface Props{
        children:React.ReactNode
    }



export const Modal = ({children}:Props) =>{

    const closeModal = (e:React.MouseEvent):void =>{
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }
    return(
        <div id="modal" className="hide"> 
            <div className={style.fade} onClick={closeModal}></div>
            <div className={style.Modal}>
                <h2>Texto Modal</h2>
                {children}
            </div>
        </div>
    )
}




