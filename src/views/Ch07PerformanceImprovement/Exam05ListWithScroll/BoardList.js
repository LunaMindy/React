import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import BoardListItem from "./BoardListItem";
import style from "./style.module.css";
import { AutoSizer, List } from "react-virtualized";

function getBoards() {
  const boards = [];
  for(var i=50; i>=1; i--) {
    boards.push({bno: i, btitle: "제목" + i, selected: false})
  }
  return boards;
}

function BoardList(props) {
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards); //한번만 호출하려고
  const [bno, setBno] = useState(51);
  
  const getLength = useMemo(() => { //boards가 변경되었을떄만 실행해라, 재연산 방지
    console.log("getLength() 실행")
    return boards.length;
  }, [boards]);

  const handleBtitleChange = useCallback((event) => {  //함수도 자바스크립트에서는 객체, 함수를 만든다는 건 객체를 재생성, 재선언 방지
    setBtitle(event.target.value); //빈 배열을 넣으면 처음 마운트 될때만 실행된다. 재선언 안됨
  }, []);

  const addBoard = useCallback((argBno, argBtitle) => {  // 상태로 사용 된 것- bno, btitle, boards (상태변수를 지워 정적인 상태, 마운트시에만 변경)
    const newBoard = { bno: argBno, btitle: argBtitle };
    setBoards(prevBoards => { //이전상태를 받기 위한 값
      const newBoards = prevBoards.concat(newBoard)
      newBoards.sort((a,b) => {return b.bno - a.bno}); //내림차순
      return newBoards;
    });
    setBno(prevBno => prevBno + 1);
    setBtitle("");
  }, []);

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


  const removeBoard = useCallback((bno) => { 
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno); //filter는 새로운 배열 리턴
      return newBoards;
    });
  }, []);

  const rowRenderer = ({index, key, style}) => { //하나의 행을 만들어 주는 놈
    return (
      <div key={key} style={style}>
      <BoardListItem board={boards[index]} 
                    changeBoard={changeBoard} 
                    removeBoard={removeBoard}/>
      </div>
    );
  };

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
            {/* 입력양식일때는 무조건 상태 */}
            <button className="btn btn-info btn-sm ml-3" onClick={() => addBoard(bno, btitle)}>추가</button>
          </div>
        </div>
        <div className="d-flex bg-info">
          <span className="border" style={{width:"80px"}}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>
        {/* <div className={style.list}>
        {boards.map(board => { //반복되는 요소는 무조건 키를 가져야함
          return (
            <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
          );
        })}
        </div> */}

        <AutoSizer disableHeight>
          {({width, height}) => {
            return (
            <List width={width} height={300}
                  list={boards}
                  rowCount={boards.length}
                  rowHeight={40}
                  rowRenderer={rowRenderer}
                  overscanRowCount={5}/>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default BoardList;