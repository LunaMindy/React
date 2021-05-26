import { Link, useHistory } from "react-router-dom";
import { getBoard, deleteBoard } from "./data";
import qs from "qs";

function BoardRead(props) {
    // console.log("boardread  ",props);
    const bno = parseInt(props.match.params.bno); //패스베리어블을 받는 방법
    const board = getBoard(bno);
 
    //쿼리스트링 방법은 파싱작업이 들어가서 한줄 더 들어감
    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    const pageNo = parseInt(queryString.pageNo);

    //hook 사용 브라우저가 가지고잇는 histroy를 사용하겠다.
    const history = useHistory();
    //히스토리 객체도 배열 -> 지금까지 쭉 url 변경된 내용이 들어가있다.


    //
    const handleRemove = (event) =>{
        deleteBoard(bno);
        //새로운 url을 주게되면 이 url로 바꿔치기 효과가 난다.
        // history.push("/ch06?pageNo=" + pageNo); //추가하라~ -> 는 url을 바꾸라는 의미 <  URL변경 >
        // window.location.href(x) 쓰지마라. 서버요청이 되어버림, spa는 못쓴다~~
        history.goBack();
    };
    return(
        <div className="card">
        <div className="card-header">
          BoardRead
        </div>
        <div className="card-body">
          <div>
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {board.bdate}</p>
            <p>bhitcount: {board.bhitcount}</p>
          </div>
          <div>
            <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </div>
      </div>

    );
}
export default BoardRead;
