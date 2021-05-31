import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from 'AppContext';
import { createStore } from 'redux';
import rootReducer from "redux/root-reducer";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension"
//Provider-> 컨텍스트로 만들어짐, 원래 리엑트에서 리덕쓰 못쓰는데 쓸수있게 하는게 리액트-리덕스
import { addAuthHeader } from "apis/axiosConfig";
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';

//createstore 만들에 rootreducer를 매개값으로 가져옴.
const store = createStore(rootReducer, composeWithDevTools());
// store.state.colorReducer

//Redux에 인증 정보 설정
store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));

//Axios에 인증 헤더 추가
if(sessionStorage.getItem("authToken")){
  addAuthHeader(sessionStorage.getItem("authToken"));
}

//스토어 => 저장하는 객체 무엇을~? -> rootreducer.rootreducer안에 리듀서들 들어가있어, 
//그 리듀서들안에 있는 객체들의 상태를 저장! 전역데이터 저장! color 같은 전역데이터 총관리
//그 루트리듀서에 컨바인되어있는 디듀스들의 상태데이터, 데이터베이스 같은 느낌

//이렇게 만든 스토어를 프로바이더에 지정, 
ReactDOM.render(

    <BrowserRouter>
    <Provider store={store}> 
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
    </BrowserRouter>,
  document.getElementById("root"),
);
//app의 내용을 id 가 root인 element에 넣는다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


// /React.StrictMode>, 문법검사를 철저하게 해주겠다. 개발모드에선 사용되고 프로덕션 모드에선 날라간다. 넣어도 되고 빼도 된가.


///갱신될때마다 다시 세팅된다.  새로고침하면 다시 실행됨