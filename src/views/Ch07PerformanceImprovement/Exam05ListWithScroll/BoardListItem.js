import React from "react";
import { useCallback } from "react";

function BoardListItem(props) {
  console.log("BoardListItem 리렌더링: ", props.board.bno)

  const handleChange = useCallback(() => { //재선언되면 주소가 달라짐
    props.changeBoard(props.board.bno);
  }, [props]);

  const handleRemove = useCallback(() => {
    props.removeBoard(props.board.bno);
  }, [props]);

  return ( //props를 넣으면 부모가 받아줘야함
    <div key={props.board.bno} className="d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex">
        <span style={{width:"80px"}}>{props.board.bno}</span>
        <span>{props.board.btitle}</span>
      </div>
      <div>
        <button className="btn btn-outline-primary btn-sm mr-1" onClick={handleChange}>변경</button>
        <button className="btn btn-outline-danger btn-sm" onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
}
export default React.memo(BoardListItem);