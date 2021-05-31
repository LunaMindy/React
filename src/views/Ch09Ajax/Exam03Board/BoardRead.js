import { deleteBoard, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardRead(props) {
    const bno = parseInt(props.match.params.bno);///문자로 얻어지기 때문에, 숫자로 변환해서 사용해야함
    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    const pageNo = parseInt(queryString.pageNo);

    //비동기 호출
 /*    const board = readBoard(bno);
    const work = async() => {
        board = await readBoard(bno);
    };
    work(); */
//실행하고 나서 곧바로 데이터를얻는게아니라,데이터를받고나서 리렌더링을 하려고하면 ->  상태로 만들어야한다. 상태를 만들어놓고 상태를변경해줘야, 리렌더링된다.
//데이터가직접바뀌던지, 이렇게 네트워크 지연으로 인해서,당장은 데이터가 없지만,조금뒤에 데이터가와서 데이터를보여줘야한다면 상태로 만들어져야한다.
//변수로 만들어놓으면 아무리 값이바뀌어도 재실행되지않는다.
//업데이트되는 조건  1 prop이바뀌거나 2state가 바뀌거나.3 부모가리렌더링될때.    하지만 여기선 123 다 아니다.


    const [board, setBoard] = useState({});

    useEffect(() => { //마운트와 업데이트 할때마다 실행, 여기 안에서 업데이트 되는코드넣어버리면 무한루프돈다
        //여기엔 async 넣을수 없다.
        const work = async () => {
            try {
                const response = await readBoard(bno);
                setBoard(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        work();
    },[bno]); //마운트될때 최초실행할때
  //  {},[])

    const handleRemove = async (event) => {
        try{
            await deleteBoard(bno);
            props.history.goBack();
        }catch(error){
            console.log(error);

        }

    };

    return(
        <div className="card">
        <div className="card-header">
          BoardRead
        </div>
        <div className="card-body">
            
          {board &&
            <>
              <div>
                <p>bno: {board.bno}</p>
                <p>btitle: {board.btitle}</p>
                <p>bcontent: {board.bcontent}</p>
                <p>bwriter: {board.bwriter}</p>
                <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
                <p>bhitcount: {board.bhitcount}</p>
                <p>battachoname: {board.battachoname}</p>
                <p>battachsname: {board.battachsname}</p>
                <p>battachtype: {board.battachtype}</p>
              </div>
              <div>
                <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
                <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
                <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
              </div>
            </>
          }
        </div>
      </div>
    );
}
export default BoardRead;
