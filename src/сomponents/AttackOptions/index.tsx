import React from "react";
import healthIcon from "../../images/icons/bar.svg"
import energyIcon from "../../images/icons/bar-1.svg"
import powerIcon from "../../images/icons/bar-2.svg"
import "./attackOptions.css"
interface AttackOptionsIE{
    health:{value:number, maxValue:number}
    energy:{value:number, maxValue:number}
    power:{value:number, maxValue:number}
}

export const AttackOptions: React.FC<AttackOptionsIE> = (props) =>{

    return(
        <div className="attackOptionsWrapper">
            <div className="attackCard">
                <img src={healthIcon}></img>
                <div>
                    {props.health.value + "/" + props.health.maxValue}
                </div>
            </div>
            <div className="attackCard">
                <img src={energyIcon}></img>
                <div>
                    {props.energy.value + "/" + props.energy.maxValue}
                </div>
            </div>
            <div className="attackCard">
                <img src={powerIcon}></img>
                <div>
                    {props.power.value + "/" + props.power.maxValue}
                </div>
            </div>
        </div>
    );
}