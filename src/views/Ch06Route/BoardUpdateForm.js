import { useState } from "react";
import { getBoard, updateBoard } from "./data";

function BoardUpdateForm(props) {
    const bno = parseInt(props.match.params.bno);
    //사용자 입력한대로 값이 바껴야하니까. 변수말고 상태로!!! 

    //화살표함수를 만들어서 여기서 호출시켜주면, 얘는 마운트 될때만 젤처음에 한번만 실행되니까!/ 함수호출이 아니라 함수를 주면 해결~
    const [board, setBoard] =  useState(() => {return getBoard(bno);}); 

    const handleChange = (event) =>{
        setBoard({
            ...board,
            [event.target.name]: event.target.value
        });
    };

    const handleUpdate = (event) =>{
        event.preventDefault();
        updateBoard(board);
        props.history.goBack();
    };

    const handleCancel = (event) =>{
        props.history.goBack()
    }

    return(
        <div className="card">
        <div className="card-header">
          Component: BoardUpdateForm
        </div>
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <div className="form-group row">
              <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 d-flex justify-content-center">
                <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
                <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
}
export default BoardUpdateForm;
