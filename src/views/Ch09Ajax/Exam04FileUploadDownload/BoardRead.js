import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
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
//

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
    //방법1
    const [imgSrc, setImgSrc] = useState(null);
    
    useEffect(() => {
      if(board.battachoname) { ///battachoname 존재할 경우, 그림만 따로 받아온다.
        const work=async () => {
            try {
              const response = await downloadAttach(board.bno); //여기 담긴 데이터는 이미지 데이터
              setImgSrc(URL.createObjectURL(response.data)); //
              // imgTag.current.src = URL.createObjectURL(response.data); //dom 참조 이용해서 src를 바로 바꿀수있다
            } catch (error) {
              console.log(error);
            }
        };
        work();

      }
    },[board]); //board 상태가 바뀔때마다 실행된다.

    //방법2
    const authToken = useSelector(state => state.authReducer.authToken);





    return(
        <div className="card">
          <div className="card-header">
            BoardRead
          </div>
          <div className="card-body">
              
            {board &&
            <>
              <div className="row">
                <div className="col-md-6">  {/* 그리드시스템쓴다. */}
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

                <div className="col-md-6">
                  {board.battachoname && 
                    <div>
                      {/* 방법1 */}
                    <img src={imgSrc} alt="" width="200"/>
                    {/* ref={imgTag}/이거 없어도 된다. */}

                    <hr/>

                      {/* 방법2 */}
                      {/* <img src= {`http://localhost:8080/boards/battach/${board.bno}`} alt="" width="200"/> */}
                      {/* 요청헤더에 authToken 안들어감 -> 403에러남. */}

                      <img src= {`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width="200"/>
                      {/* axios 이용안함, 요청파라메타로 authToken 넘겨줌 */}
                    </div>
                  }

                </div>
                </div>
              
                <div>
                  <Link to={"/ch09/exam04?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
                  <Link to={`/ch09/exam04/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
                  <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
                </div>
            
              </>
            }
          </div>
      </div>
    );
}
export default BoardRead;
