import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards(props) {
  const boards = [];
  for(var i = 5 ; i >=1; i--) {
    boards.push({bno:i, btitle:"제목"+i})
  }
  return boards;
}

function BoardList(props) {

  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(6);

  // const getLength = () => {
  //   console.log("getlength 실행");
  //   return boards.length;
  // };

  const getLength = useMemo(() => {
    console.log("getlength 실행");
    return boards.length;
  }, [boards]);//boards가 변경되었을때만 실행

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);//[]안에 관심 대상을 넣어줌 관심대상이 변경되었을 때 
  //여기 안에는 상태변수, props를 사용하지 않기때문에 처음 마운트 됐을때만 선언되면 된다.
  //[]가 아무것도 없으면 처음 마운트 됐을때만 선언 (실행 X)

  const addBoard = useCallback((argBno, argBtitle) => {
    const newBoard = {bno:argBno, btitle:argBtitle};
    
    // setBoards(newBoards);
    setBoards(prevBoards => {
      const newBoards = prevBoards.concat(newBoard);
      newBoards.sort((a,b) => {return b.bno - a.bno});//b-a는 내림차순
      return newBoards;
    });
    // setBno(bno + 1);
    setBno(prevBno => prevBno + 1);

    setBtitle("");
  },[]);//prevBoards, prevBno는 상태가 아님

  const changeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if(board.bno === bno) {
          const newBoard = {...board, btitle: board.btitle + "(변경)"}
          return newBoard;
        } else {
          return board;
        }
      });

      return newBoards;
    });
  },[]);

  // const removeBoard = useCallback((bno) => {
   
  //   setBoards(prevBoards => {
  //     const newBoards = prevBoards.filter(board => board.bno !== bno);
  //     return newBoards;
  //   });
  // },[boards]);//이렇게 하면 리 렌더링됌

  const removeBoard = useCallback((bno) => {
   
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno);
      return newBoards;
    });
  },[]);

  return (
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
            <input type="text" value={btitle} onChange={handleBtitleChange}/>
            <button className="btn btn-info btn-sm ml-3" onClick={() => addBoard(bno, btitle)}>추가</button>
          </div>
        </div>
        <div className="d-flex bg-info">
          <span className="border" style={{width:"80px"}}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>

        {boards.map(board => {
          return (
            <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
          );
        })}

      </div>
    </div>
  );
}

export default BoardList;