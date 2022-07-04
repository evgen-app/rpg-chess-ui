import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReclashButton } from './сomponents/ReclashButton';
import { ReclashInput } from './сomponents/ReclashInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OnBoarding } from './screens/onBoarding';
import { Registration } from './screens/registration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<OnBoarding></OnBoarding>}>
      
      </Route>
      <Route path="test" element={<App/>}></Route>
      <Route path="registration" element={<Registration></Registration>}></Route>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
