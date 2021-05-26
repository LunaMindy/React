import { useState } from "react";

function getRandomColor() {
    return "#"+Math.floor(Math.random()*parseInt("ffffff",16)).toString(16)
    // 16진수로 생각해서 정수로 만들어라 다 더하면 255 parseInt("ffffff",16)   return "#"+Math.floor(Math.random()*parseInt("ffffff",16))
}

function ComAFun(props) {
    const [state, setState] = useState({
        number:0,
        color:"black"
    });

    const addNumber = (event) => {
        setState({
            ...state,
            number: state.number + 1
        });
    };

    const changeColor = (event) => {
        setState({
            ...state,
            color:getRandomColor()
        });
    };
    // console.log("ComaFun() 실행");
    return(
        <div className="card">
        <div className="card-header">
        ComAFun
        </div>
        <div className="card-body">
            <h3 style={{color:state.color}}>{state.number}</h3>
            <button className="btn btn-info btn-sm mr-2"onClick={addNumber} >숫자증가</button>
            <button className="btn btn-info btn-sm"onClick={changeColor} >색깔변경</button>
        </div>
      </div>

    );
}
export default ComAFun;
