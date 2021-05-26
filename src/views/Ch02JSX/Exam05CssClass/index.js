import "./style.css";

function Exam05CssClass(props) {
    //일반 자바스크립트 주석
    /*
    여러행에 걸쳐 주석 내용을 작성할 때
    */

    const name = "React";
    return(
        <div className="card">
            {/* 헤더내용 */}
        <div className="card-header" //부트스트랩의 Cass Class 적용
        >
        Exam05CssClass
        </div>
        <div className="card-body">
            <div className="react" //style.css에 정의된 Class 적용
                >{name}</div>
            </div>
      </div>

    );
}
export default Exam05CssClass;
