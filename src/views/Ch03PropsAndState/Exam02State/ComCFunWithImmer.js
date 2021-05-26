import React from "react";
import { useState } from "react";
import produce from "immer";

function ComCFunWithImmer(props) {
 const [joinForm, setJoinForm] = useState({
   uid:"",
   uname:"",
   upassword:"",
   ujob:"developer",
   uskill:[]
 });

 const handleSubmit = (event) => {
   
  event.preventDefault();
  console.log(joinForm);
};

const handleChange = (event) => {
  if(event.target.name !== "uskill"){
    setJoinForm(produce((draft)=>{
      draft[event.target.name] = event.target.value;

      // 이미복제된것을 바꾸기때문에 전혀 상관이 없다. 원본이 아니기 때문!

    }))
  }else {
    if(event.target.checked){
      setJoinForm(produce((draft) => {
        draft.uskill.push(event.target.value);
// 원본에서 추가
      }));
    }else{
      setJoinForm(produce((draft)=>{
        var index = draft.uskill.findIndex(item=>item === event.target.value);
        // 배열의 항목이 지금 체크한 양식과동일하냐.?

        draft.uskill.splice(index,1);
        // 새로운 항목을 바꾸는게 아니라 원본에서 빼버리는,
// draft 이미 복제된거니까 지지고볶던 상관없다~~
//상태가 복잡하면 복잡할수록. immer쓰는게 훨씬 간편하다.!
      }));
    }
   
  }
};

return (
  <div className="card">
  <div className="card-header">
  ComCFunWithImmer
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">ID</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="uid" onChange={handleChange}/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="uname" onChange={handleChange} autoComplete="username"/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" name="upassword" onChange={handleChange} autoComplete="current-password"/>
        </div>
      </div>
      <fieldset className="form-group row">
        <legend className="col-form-label col-sm-2 float-sm-left pt-0">Job</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="ujob" value="developer" onChange={handleChange} checked={joinForm.ujob === "developer"} />
            <label className="form-check-label">
              개발자
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="ujob" value="designer" onChange={handleChange} checked={joinForm.ujob === "designer"} />
            <label className="form-check-label">
              디자이너
            </label>
          </div>
          <div className="form-check disabled">
            <input className="form-check-input" type="radio" name="ujob" value="pm" onChange={handleChange} checked={joinForm.ujob === "pm"} />
            <label className="form-check-label">
              프로젝트 관리자
            </label>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
      <legend className="col-form-label col-sm-2 float-sm-left pt-0">Skill</legend>
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="uskill" value="java" onChange={handleChange}/>
            <label className="form-check-label">
              자바
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="uskill" value="spring" onChange={handleChange}/>
            <label className="form-check-label">
              스프링
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="uskill" value="react" onChange={handleChange}/>
            <label className="form-check-label">
              리액트
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary btn-sm">가입</button>
        </div>
      </div>
    </form>
  </div>
</div>
);
  
}

export default ComCFunWithImmer;