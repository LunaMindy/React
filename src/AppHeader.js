import { useContext } from "react";
import { Link } from "react-router-dom"
import AppContext from "AppContext";
import { useDispatch, useSelector } from "react-redux";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";
import { removeAuthHeader } from "apis/axiosConfig";

function AppHeader(){
  //context 이용 할 경우
  const appContext = useContext(AppContext);

  //redux를 이용할 경우
  const globalUid = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const logout = (event) => {
    //context 이용 할 경우
    appContext.setUid("");

    //redux 이용할 경우
    dispatch(createSetUidAction(""));
    dispatch(createSetAuthTokenAction(""));
    removeAuthHeader();

    //SessionStorage 에 인증 내용 제거
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("authToken");
  };

  return (
    <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
                    justify-content-between">
      <Link to="/" className="navbar-brand">
        <img src="/logo512.png" alt="" width="30" height="30" 
              className="align-top"/>
        {' '} React
      </Link>
      <div>
        {appContext.uid === "" && globalUid === ""? 
        <Link to="/ch09/exam02" className="btn btn-success btn-sm">로그인</Link>
        :
        <div className="d-flex align-items-center">
          <span className="mr-2">User ID: {appContext.uid || globalUid}</span>
          <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button> 
        </div>
        }
      </div>
    </nav>
  );
}

export default AppHeader;