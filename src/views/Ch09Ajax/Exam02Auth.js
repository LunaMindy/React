import { login } from "apis/auth";
import { addAuthHeader, removeAuthHeader } from "apis/axiosConfig";
import { getBoardList } from "apis/boards";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

function Exam02Auth(props) {
    const [user, setUser] = useState({
        userid: "", //입력양식 기본값 "", null아님
        userpassword: "",

    });
    
    const handleChange = (event) => {
        //상태변경하려면 set 쓰는데, 이때 최적화 신경쓰지 말라, 그냥 기본으로
        setUser({
            ...user, //이거 다 복사한것중에서
            [event.target.name] : event.target.value //이것만 따로 제공해주겠다!
        });
    };

    const globalUid = useSelector(state =>  state.authReducer.uid) //(state) => {return state.authReducer.uid;}

    const dispatch = useDispatch();
    

    const handleLogin = async(evnet) => {
        // console.log(user);
        //await 썼단 얘기는 비동기 함수내에서 쓰겠다! async
        try{
            //로그인 요청
            const response = await login(user); //promise 리턴하기때문에 await 쓸수이싿.
            //요청 헤더에 JWT 토큰 추가
            addAuthHeader(response.data.authToken);
            //Redux에 인증 내용 저장
            dispatch(createSetUidAction(response.data.userid)); //user.userid 이거 써도 됨.
            dispatch(createSetAuthTokenAction(response.data.authToken));
            //SessionStorage 에 인증 내용 저장(브라우저 갱신 시 사용)
            sessionStorage.setItem("uid", response.data.userid);
            sessionStorage.setItem("authToken", response.data.authToken);


        }catch(error){
            console.log(error);
        }
    };

    const handleLogout = (event) => {
        //요청 헤더에 JWT 토큰 제거
       removeAuthHeader();
       //Redux 에 인증 내용 제거
        dispatch(createSetUidAction("")); 
        dispatch(createSetAuthTokenAction(""));
          //SessionStorage 에 인증 내용 제거
          sessionStorage.removeItem("uid");
          sessionStorage.removeItem("authToken");
    };

    const handleBoardList = async(event) => {
        try{
            const response = await getBoardList();
            console.log(response.data);
        }catch(error){
            console.log(error);
        }

    }

    return(
        <div className="card">
        <div className="card-header">
        Exam02Auth
        </div>
        <div className="card-body">
            <div>
                <button className = "btn btn-info btn-sm" onClick = {handleBoardList}>게시물 목록(인증 필요)</button>
            </div>
            <hr/>
        {globalUid === ""?
            <div>
                <div className="form-group row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="userid" value={user.userid} onChange={handleChange}/>
                </div>
                </div>
                <div className="form-group row">
                <label htmlFor="upassword" className="col-sm-2 col-form-label">User Password</label>
                <div className="col-sm-10">
                    
                    <input type="text" className="form-control" name="userpassword" value={user.userpassword} onChange={handleChange}/>
                </div>
                </div>
                <button className="btn btn-success btn-sm" onClick={handleLogin}>로그인</button>
            </div>
            :
            <div>
                <button className="btn btn-success btn-sm" onClick={handleLogout}>로그아웃</button>
            </div>}
        </div>
      </div>
    );
}
export default Exam02Auth;
