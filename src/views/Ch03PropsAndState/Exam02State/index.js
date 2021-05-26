import ComBFun from "./ComBFun";
import ComCFunWithImmer from "./ComCFunWithImmer";



const { default: ComAClass } = require("./ComAClass");
const { default: ComAFun } = require("./ComAFun");
const { default: ComBClass } = require("./ComBClass");
const { default: ComCFun } = require("./ComCFun");


function Exam02State(props) {
    return(
        <div className="card">
        <div className="card-header">
        Exam02State
        </div>
        <div className="card-body">
           <ComAClass/>
           <ComAFun/>
           <ComBClass/>
           <ComBFun/>
           <ComCFun/>
           <ComCFunWithImmer/>
        </div>
      </div>

    );
}
export default Exam02State;
