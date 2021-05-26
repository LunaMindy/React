import { useEffect, useState } from "react";

function FunType(props) {
    console.log("FunType() 실행");
    
    //클래스가 아니기때문에 객체로 안만들어진다. -> 업데이트 마다 재실행된다.
    //얘가 비록 실행되더라도, 한번준값 실행되도
    const [state,setState] = useState({
        startNum : 0,
        number:0
    });

    /* setState({
        startNum:props.startNum,
        number:props."startNum"
    }) */

    useEffect(() => {
        console.log("마운트, 업데이트 후에 실행");

        return(()=>{
            console.log("업데이트전, 언마운트시 실행");
        });
    });

    useEffect(()=>{
        //업데이트와 상관없이 마운트 할때만 실행
        console.log("마운트 실행");

        return(()=>{
        console.log("언마운트 실행");
            
        });
    },[]);


    useEffect(()=>{
        //업데이트와 상관없이 마운트 할때만 실행
        console.log("마운트/props 가 변경될 때 실행");

        return(()=>{
        console.log("언마운트 실행");
            
        });
    },[props]);

    useEffect(()=>{
        //업데이트와 상관없이 마운트 할때만 실행
        console.log("마운트/state 가 변경될 때 실행");

        // 이부분이 업데이트 될때마다 실행된다
        setState({
            startNum:props.startNum,
            number:props.startNum
        });
        return(()=>{
        console.log("언마운트 실행");
            
        });
    },[state]);
    
    


    const handelIncrement = (event) => {
        setState({
            ...state,
            number: state.number + 1
        });
    };

    return(
        <div className="card">
            <div className="card-header">
            FunType
            </div>
            <div className="card-body">
               <div>number:{state.number}</div> 
               <button className = "btn btn-info btn-sm mt-2" onClick={handelIncrement}>증가</button>
            </div>
        </div>

    );
}
export default FunType;
