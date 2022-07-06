import React, {useState} from "react";
import "./onBoarding.css"
import welcome from "../../images/welcome.svg"
import tonLight from "../../images/icons/tonLight.svg"
import { ReclashInput } from "../../сomponents/ReclashInput";
import { ReclashButton } from "../../сomponents/ReclashButton";
import { Link, useNavigate } from "react-router-dom";

export const OnBoarding : React.FC = () =>{
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    let navigator = useNavigate()
    return(
        <div className="main">
            <img src={welcome} className="welcome"></img>
            <div className="card">
                <ReclashInput placeholder="Name" onChange={(name:string)=>setName(name)}></ReclashInput>
                <ReclashInput placeholder="Password" type="password" onChange={(pass:string)=>setPassword(pass)}></ReclashInput>
                <ReclashButton color="green" onClick={()=>navigator("/test")}>LOGIN</ReclashButton>
                <Link to="/forgot" className="forgotLink">Forgot password or login?</Link>
                <ReclashButton color="blue" onClick={()=>navigator("/test")}><div>login with tg</div><img src={tonLight}></img></ReclashButton>
            </div>
            <ReclashButton color="blue" onClick={()=>navigator("/registration")}><div>Register with TON</div><img src={tonLight}></img></ReclashButton>
            <div className="footer">
                        © 2022 <br></br>  
                Chess Reclash DEVEOPERS <br></br>  
                All rights reserved <br></br>  
            </div>
        </div>
    )
}

