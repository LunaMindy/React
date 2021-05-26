import { useCallback } from "react";

function BoardListItem(props) { //얘가 실행될때마다 새로운 함수가 선언되는것을 줄이자! 어떻게? callback 이용해서!
    console.log("BoardListItem 리렌더링:  ",props.board.bno) 
    //해당 bno props 만 변경하면 해당 bno만 리렌더링되면 되는데, 전체가 전부 리렌더링 된다. 4번만 수정해도 54321 다 나옴
  
  const handleChange = useCallback(() => {
      props.changeBoard(props.board.bno);
    }, [props]);

    const handleRemove = useCallback(() => {
      props.removeBoard(props.board.bno);
    }, [props]);

    return(
        <div key={props.board.bno} className="d-flex align-items-center justify-content-between border-bottom">
        <div className="d-flex">
          <span style={{ width: "80px" }}>{props.board.bno}</span>
          <span>{props.board.btitle}</span>
        </div>
        <div>
          <button className="btn btn-outline-primary btn-sm mr-1" onClick={handleChange}>변경</button>
          <button className="btn btn-outline-danger btn-sm" onClick={handleRemove}>삭제</button>
        </div>
      </div>

    );
}
export default BoardListItem;
