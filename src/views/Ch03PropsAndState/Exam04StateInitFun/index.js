import { useState } from "react";

function getBoardList() {
console.log("getBoardList() 호출" )
    return (
        [
        {bno:1, btitle:"제목1", bcontent:"내용1"},
        {bno:2, btitle:"제목2", bcontent:"내용2"},
        {bno:3, btitle:"제목3", bcontent:"내용3"},
    ]
    );
}

function Exam04StateInitFun() {

    // const [boardList, setBoardList] = useState([ //초기에 한번만 셋팅
    //     {bno:1, btitle:"제목1", bcontent:"내용1"},
    //     {bno:2, btitle:"제목2", bcontent:"내용2"},
    //     {bno:3, btitle:"제목3", bcontent:"내용3"},
    // ]);
    //실행은 하지만, 재설정하지는 않는다. 그래서 실행하는데 무의미, 그래서 잘못 설정하면 네트워크 성능이 확 떨어질수 있다
    // const [boardList, setBoardList] = useState(getBoardList());//리렌더링할 때 마다 계속 호출됨. //getBoardList()함수 출력해서 리턴값 받음
    const [boardList, setBoardList] = useState(getBoardList);//최초 렌더링시 딱 한번 호출 //한번만 실행되기하기 위해,. //무의미한 호출을 피하기 위해서.
    const [newBno, setNewBno] = useState(4);

    const addBoard = (event) =>{
        setBoardList(boardList.concat({
            bno:newBno,
            btitle:"제목" + newBno,
            bcontent:"내용" + newBno
        }));
        setNewBno(newBno + 1);
    };

    return(
        <div className="card">
        <div className="card-header">
            Exam04StateInitFun
        </div>
        <div className="card-body">
          <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map(board=>(
                <tr className="text-center" key={board.bno}>
                  <th>{board.bno}</th>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default Exam04StateInitFun;
