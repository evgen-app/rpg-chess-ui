import React, {useState} from "react";
import { useNavigate } from "react-router";
import { ReclashButton } from "../../сomponents/ReclashButton";
import { ReclashInput } from "../../сomponents/ReclashInput";
import "./registration.css"
import tonLight from "../../images/tonLight.svg"
import backImg from "../../images/back.svg"

export const Registration:React.FC = () =>{
    const [wallet, setWallet] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    let navigator = useNavigate()

    return(
        <div className="mainBG">
            <div className="regHeader">REGISTER WITH TON</div>
            <div className="regCard">
                <div className="tonHeader"></div>
                <ReclashInput placeholder="TON wallet" onChange={(wallet:string)=> setWallet(wallet)}></ReclashInput>
                <ReclashInput placeholder="Login" onChange={(login:string)=> setLogin(login)}></ReclashInput>
                <ReclashInput placeholder="Password" type="password" onChange={(pass:string)=> setPassword(pass)}></ReclashInput>
                <ReclashButton color="green" onClick={()=>navigator("/test")}><div>REGISTER</div><img src={tonLight}/></ReclashButton>
            </div>
            <ReclashButton onClick={()=>navigator("/")} color="red"><div>Back</div><img src={backImg}></img></ReclashButton>
        </div>
    )
}