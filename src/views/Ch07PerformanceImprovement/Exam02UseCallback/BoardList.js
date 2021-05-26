import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for (var i = 5; i >= 1; i--) {
    boards.push({ bno: i, btitle: "제목" + i});
  }
  return boards;
}

function BoardList(props) {
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(6);

//   const getLength = () => {
//       console.log("getLength() 실행");
//     return boards.length;
//   };


  const getLength = useMemo(() => {
      //쓸데없는 재 연산 방지, 
      console.log("getLength() 실행");
    return boards.length;
  }, [boards]);

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);
  //함수는 처음한번만 선언하면 되고, 그다음부터는 선언할 필요없으면 [] 빈배열을 넣어준다. 그럼 처음 마운트 될때만 선언되고 그다음에는 업데이트 되지않는다. 실행이 아니라 선언임
  //[props] -> props 가 변경되었을때만 이 함수를 다시 선언하겟다.
  //[btitle] -> btitle이 변경되었을때만 재 선언하겠다.
  //[]여기에 관심대상 넣어줌, 이 관심대상이 바뀌었을때만 재선언해준다.


  const addBoard = useCallback((event) => {
    //이 함수는 상태가 사용되었다.
    //그래서 언제 재정의 되어야 하냐면, bno, btitle, boards 가 바뀌었을때 재선언 해줘야한다. // 근데 props은 여기서 사용안했기때문에, props 이 변경되어도 여기선 다시 선언 안된다.
    const newBoard = {bno, btitle}; //bno btitle board 다 상태, 
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => {return b.bno - a.bno});
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  }, [bno, btitle, boards]);

  const changeBoard = useCallback((bno) => {
    //상태 boards 만 사용되었다. bno는 상태 아님, 매개값.ㄴ
    const newBoards = boards.map(board => {
      if(board.bno === bno){
        const newBoard = {...board, btitle:board.btitle + "(변경)"};
        return newBoard;
      }else{
        return board;
      }
    });

    setBoards(newBoards);

  },[boards]);

  const removeBoard = useCallback((bno) => {
    //boards 만 사용, boards 만 바뀌었을때 재선언.
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  },[boards]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          BoardList
        </div>
        <div className="card-body">
          <div>
            <span className="mr-2">게시물 수:</span>
            {/* <span className="text-danger">{getLength()}</span> */}
            <span className="text-danger">{getLength}</span>

            <div className="d-flex align-items-center mt-2 mb-3">
              <span className="mr-2">제목:</span>
              <input type="text" value={btitle} onChange={handleBtitleChange} />
              <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>추가</button>
            </div>
          </div>

          <div className="d-flex bg-info">
            <span className="border" style={{ width: "80px" }}>번호</span>
            <span className="border flex-fill">제목</span>
          </div>

          {boards.map(board => {
            return (
              <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default BoardList;