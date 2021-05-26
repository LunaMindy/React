import { Link } from "react-router-dom";
import qs from "qs";
import { getBoardList } from "./data";


//페이지가 바뀌면 다 날라가 버리니까, 상태로 만들지마라!!!!
function BoardTable(props) {
    //ㅡ2) 여기서 페이지 넘버 받아서

    //상태 아님, 그냥 변수
    let pageNo = 1;
    console.log("aaaaaaaaaaaaa",props); //props의 location 이 있는지

    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    // console.log("파싱되기전 데이타",props.location.search); //파싱되기전 데이타
    // console.log("파싱이 된 후 데이터",queryString); //파싱이 된 후 데이터 -> 배열로 출력 나중에 parseInt 해줘야함

    if(queryString.pageNo){
        pageNo = parseInt(queryString.pageNo);
    }

    //이 데이터는 어디서 가져올까~? restful api 에서 가져옴! 아직은 안함!
    // const boardList = [];

    // ㅡ3) 페이지 넘버를 이함수로 넘겨줌
    const boardList = getBoardList(pageNo);


    return(
        <div className="card">
        <div className="card-header">
          Component: BoardTable
        </div>
        <div className="card-body">
          <Link to="/ch06/writeForm" className="btn btn-info btn-sm mb-2">추가</Link>
          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th>bno</th>
                <th>btitle</th>
                <th>bwriter</th>
                <th>bdate</th>
                <th>bhitcount</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map(board=>(
                <tr className="text-center" key={board.bno}>
                  <th>{board.bno}</th>
                  {/* 페스베리어블과 쿼리스트링 둘다 사용됐다! */}
                  {/* ${board.bno}페스베리어블의 값을 얻고자 할때는?  */}
                  <td><Link to={`/ch06/${board.bno}/read?pageNo=${pageNo}`}>{board.btitle}</Link></td>
                  <td>{board.bwriter}</td>
                  <td>{board.bdate}</td>
                  <td>{board.bhitcount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
              {/* ㅡ1) 페이지 123 누르는 부분! 페이지를 눌렀을때, 자기 자신의 컴포넌트내용이 나옴! 나올때, 페이지 넘버를 넘겼기 때문에 */}
            <Link to="/ch06?pageNo=1" className={`btn ${pageNo===1?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>1</Link>
            <Link to="/ch06?pageNo=2" className={`btn ${pageNo===2?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>2</Link>
            <Link to="/ch06?pageNo=3" className={`btn ${pageNo===3?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>3</Link>
          </div>
        </div>
      </div>
    );
}
export default BoardTable;
