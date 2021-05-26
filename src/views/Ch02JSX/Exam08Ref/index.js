import ComB from "./ComB";
import ComA from "./ComA";
import ComC from "./ComC";


function Exam08Ref(props) {
 
  return (
    <>
      <div className="card">
        <div className="card-header">
        Exam08Ref
        </div>
        <div className="card-body">
          <ComA/>
          <ComB/>
          <ComC/>
        </div>
      </div>
    </>
  );
}

export default Exam08Ref;