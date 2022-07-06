import React, { useState } from "react";

interface selectHeroCardIE{
    health: number
    energy:number
    power:number
    selected?:boolean
}

export const selectHeroCard:React.FC<selectHeroCardIE> = (props) =>{
    const [select, setSelect] = useState(props.selected == undefined? false:props.selected)

    return(
        <div>
            
        </div>
    )
}