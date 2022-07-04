import "./button.css"
import React from "react"
import bgGreen from "./bgBtnGreen.svg"
import bgBlue from "./bgBtnBlue.svg"

interface ReclashButtonIE{
    class?:string
    onClick:()=>void
    color: "green"|"blue"|"red"
    children?:JSX.Element|string|JSX.Element[]
}

export const ReclashButton:React.FC<ReclashButtonIE> = (props) =>{
    return(
        <div 
            onClick={()=>props.onClick()} 
            className={"reclashBtn" + " "+ props.color + " " + props.class}
            >
            {props.children}
        </div>
    )
} 