import React from 'react';
import { ReclashButton } from './сomponents/ReclashButton';
import { ReclashInput } from './сomponents/ReclashInput';

function App() {
  return (
    <div className="App">
      <ReclashInput  onChange={(a:string)=>null} placeholder='TON wallet'></ReclashInput>
      <ReclashButton color="green" onClick={()=>null} ><div>LOGIN</div><img src="/tonLight.svg"></img></ReclashButton>
    </div>
  );
}

export default App;
