import { useState } from "react";
import FunType from "./FunType";

// const { Switch, Route } = require("react-router");


// import{Route,Swithch}

function Exam02UseEffect(props) {

    const[startNum, setStartNum] = useState(0);
    const handleChange = (event) => {
        setStartNum(parseInt(event.target.value));
    };
    return(
        <div className="card">
        <div className="card-header">
        Exam02UseEffect
        </div>
        <div className="card-body" >
            <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
            {/* <Switch>
                <Route path={`${props.match.url}/exam01` }exact component={Exam01CallbackMethod}/>
            </Switch> */}
            <div className="m-2">    </div>
            <FunType startNum={startNum}/> 
        
           
            {/* 값 바인딩. */}
        </div>
      </div>

    );
}
export default Exam02UseEffect;
