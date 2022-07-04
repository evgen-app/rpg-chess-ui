import React from "react";
import "./input.css"
interface ReclashInputIE{
    type?: string
    class?:string
    onChange:(value:string)=>void
    placeholder:string
}

export const ReclashInput:React.FC<ReclashInputIE> = (props) =>{
    return(
        <input type={props.type} placeholder={props.placeholder} onChange={(e)=>props.onChange(e.target.value)} className={"reclashInput" + " " + props.class}></input>
    )
}