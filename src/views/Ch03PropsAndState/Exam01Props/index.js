import ClassTypeProps from "./ClassTypeProps";
import FunTypeProps from "./FunTypeProps";


function Exam01Props(props) {
    return(
        <div className="card">
        <div className="card-header">
        Exam01Props
        </div>
        <div className="card-body">
          <ClassTypeProps name="리액트" version={17}>
          {/* 문자열을 전달할땐 괜찮은데, 숫자를 전달할땐 표현식으로 해야한다. */}

        <div>자식내용입니다.</div>
        </ClassTypeProps>
        <FunTypeProps name="리액트" version={17}>
          <div>자식내용입니다.</div>
        </FunTypeProps>
        </div>
      </div>     

    );
};

export default Exam01Props;