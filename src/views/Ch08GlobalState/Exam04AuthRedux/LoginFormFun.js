import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";

function LoginFormFun(props) {
  const [uid, setUid] = useState("");

  const handleChange = (event) => {
    setUid(event.target.value);
  };

  const globalUid = useSelector((state) => state.authReducer.uid); //바인딩할 상태값을가져옴. 매개값으로 콜백함수 제공, 
  //첫번째, state 주고 두번째는 rootreducer에 추가해줫던 이름 authReducer. ->  두개가 있는데 authToken, uid
  const dispatch = useDispatch(); 
  //dispatch -> 액션을 만들어서 통보하는것, 액션을 내가 만들테니 좀 바꿔줘!.

  const login = (event) => {
    dispatch(createSetUidAction(uid)) // =>dispatch({type: "auth/setUid", uid});
    
    // dispatch({type: "auth/setUid", uid}); //액션객체를 이렇게 직접 만들수 있다. 그런데 이렇게 직접 타이핑하게되면, authreducer와 정확히 일치해야한다.
    //하지만 오타가 날수도 있고, 변경때마다 해줘야하기에, 유지보수에 용이하기위해 따로 액션생성 함수를 만들어서 이용해준다.

  };

  const logout = (event) => {
    dispatch(createSetUidAction(""))
  };
  return (
    <div className="card">
      <div className="card-header">LoginFormFun</div>
      <div className="card-body">
        <div className="form-group row">
          <label htmlFor="uid" className="col-sm-2 col-form-label">
            User ID
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={uid} onChange={handleChange} />
          </div>
        </div>
        {globalUid === "" ? (
          <button className="btn btn-success btn-sm" onClick={login}>
            로그인
          </button>
        ) : (
          <button className="btn btn-success btn-sm" onClick={logout}>
            로그아웃
          </button>
        )}{" "}
      </div>
    </div>
  );
}

export default LoginFormFun;