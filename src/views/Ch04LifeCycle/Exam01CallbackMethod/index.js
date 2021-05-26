import { useState } from "react";

// const { Switch, Route } = require("react-router");
const { default: ClassType } = require("./ClassType");

// import{Route,Swithch}

function Exam01CallbackMethod(props) {

    const[startNum, setStartNum] = useState(0);
    const handleChange = (event) => {
        setStartNum(parseInt(event.target.value));
    };
    return(
        <div className="card">
        <div className="card-header">
        Exam01CallbackMethod
        </div>
        <div className="card-body" >
            <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
            {/* <Switch>
                <Route path={`${props.match.url}/exam01` }exact component={Exam01CallbackMethod}/>
            </Switch> */}
            <div className="m-2">    </div>
            <ClassType startNum={startNum}/> 
        
           
            {/* 값 바인딩. */}
        </div>
      </div>

    );
}
export default Exam01CallbackMethod;
