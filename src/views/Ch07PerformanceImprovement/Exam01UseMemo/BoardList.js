import { useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for (var i = 5; i >= 1; i--) {
    boards.push({ bno: i, btitle: "제목" + i});
  }
  return boards;
}

function BoardList(props) { //1)렌더링 될때마다 계속 선언
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

  const handleBtitleChange = (event) => {
    setBtitle(event.target.value);
  };

  const addBoard = (event) => {
    const newBoard = {bno, btitle};
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => {return b.bno - a.bno});
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  };

  const changeBoard = (bno) => {
    const newBoards = boards.map(board => {
      if(board.bno === bno){
        const newBoard = {...board, btitle:board.btitle + "(변경)"};
        return newBoard;
      }else{
        return board;
      }
    });

    setBoards(newBoards);

  }

  const removeBoard = (bno) => {
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  }

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