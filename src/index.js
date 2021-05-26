import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
//app의 내용을 id 가 root인 element에 넣는다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


// /React.StrictMode>, 문법검사를 철저하게 해주겠다. 개발모드에선 사용되고 프로덕션 모드에선 날라간다. 넣어도 되고 빼도 된가.