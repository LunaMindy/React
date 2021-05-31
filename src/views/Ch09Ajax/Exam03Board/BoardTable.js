import { Link } from "react-router-dom";
import qs from "qs";
import { useEffect, useState } from "react";
import { getBoardList } from "apis/boards";

function BoardTable(props) {
    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true}); //?pageNo  여기서 ? 없애야 하기 때문에!
    const pageNo = parseInt(queryString.pageNo) || 1; //페이지넘버 1값이 기본적으로 들어가라. //얘는 상태가 아니라 컴포넌트가 바뀌고나서 얘가 바뀔리없다.
    // let pageNo = 1;
    // if(queryString.pageNo){
    //    pageNo = parseInt(queryString.pageNo);
    // }
//page를 상태값으로 만들어줌.

    const [page, setPage] = useState(null); 

    const changePageNo = async (pageNo) => {
        
        try {
            const response = await getBoardList(pageNo);

            // const pageArray = [];
            // const startPageNo = response.data.pager.startPageNo;
            // const endPageNo = response.data.pager.endPageNo;
            // //1그룹 12345 2그룹678910 이런 배열이 있어야. 
            // for(var i = startPageNo; i <= endPageNo; i++){
            //     pageArray.push(i);
            // }

            // console.log(response.data);
            setPage(response.data);//data 안에 pager board 두개 있다.
           
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        //마운트 될때 딱 한번 실행된다.
        changePageNo(pageNo);

    }, [pageNo]); //뒤에 아무것도 주어지지않고, 빈배열[]이 주어지면, 최초 마운트할때 한번 실행된다.
    //상태가아니라 얘가 const라 바뀔리가 없어서 안넣어줘도 된다. 근데 경고표시 나와서 넣어줬음

    return(
        <div className="card">
            <div className="card-header">
            BoardTable
            </div>
            <div className="card-body">
            {page!=null &&
                <div>
                <div className="mb-3">
                    <Link to="/ch09/exam03/writeForm" className="btn btn-success btn-sm">생성</Link>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {page.boards.map(board => {
                        return (
                        <tr key={board.bno}>
                            <td>{board.bno}</td>
                            <td><Link to={`/ch09/exam03/${board.bno}/read?pageNo=${page.pager.pageNo}`}>{board.btitle}</Link></td>
                            <td>{board.bwriter}</td>
                            <td>{new Date(board.bdate).toLocaleDateString()}</td>
                            <td>{board.bhitcount}</td>
                        </tr>
                        );
                    })}
    
                    <tr>
                        <td colSpan="5" style={{textAlign: "center"}}>
                        <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => changePageNo(1)}>처음</button> 
                        {(page.pager.groupNo > 1) && 
                            <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.startPageNo-1)}>이전</button>
                            //그룹넘버가 1 이상일때만.
                            // 페이지 그룹을 바꿈 -> 현재 페이지 그룹에서 -1 
                        }
                        {/* 이부분을 만들수 있다. 페이지 번호별로 링크를 만들수 있다. */}
                        {page.pager.pageArray.map(i =>
                            <button className={`btn ${i===page.pager.pageNo?"btn-danger":"btn-outline-success"} btn-sm mr-1`} key={i} onClick={() => changePageNo(i)}>{i}</button>
                            //바복
                        )} 
                        {page.pager.groupNo < page.pager.totalGroupNo && 
                            <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.endPageNo+1)}>다음</button>
                            //마지막 그룹넘버에 +1 해주면 다음그룹넘버
                        }
                        <button className="btn btn-outline-primary btn-sm" onClick={() => changePageNo(page.pager.totalPageNo)}>맨끝</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            }
            </div>
        </div>

    );
}
export default BoardTable;
