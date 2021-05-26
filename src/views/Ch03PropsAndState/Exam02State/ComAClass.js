import React from "react";

function getRandomColor() {
    return "#"+Math.floor(Math.random()*parseInt("ffffff",16)).toString(16)
    // 16진수로 생각해서 정수로 만들어라 다 더하면 255 parseInt("ffffff",16)   return "#"+Math.floor(Math.random()*parseInt("ffffff",16))
}


class ComAClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 여기선 바꾸지 말아야, 유지하면서 새로운상태를 제공해서 서로 비교하게 해야지만 렌더실행
            // 세터를 이용해서 새로운 상태 제공!
            
            number: 0,
            color: "black"
        };
        this.addNumber = this.addNumber.bind(this);
        //이안에서 this는 나를 연관시켜주어라 라는 의미
        
    }
    addNumber(event){
        // 이전의 상태 객체와 비교해서차이가 발생하면 렌더 실행!

        // console.log("addNumber() 실행");
        this.setState({
            ...this.state, //리액트가 위랑 비교해서 바뀌는 부분만 감지를 해준다.
            number: this.state.number + 1
           
            
        });
    //여기선 비동기로 동작, 비동기로 동작이 끝나야만 밑에 render 실행,

    }
    changeColor = (event) => {
        // console.log("changeColor() 실행");
        this.setState({
            ...this.state,
            color:getRandomColor()
        });

    };
// 렌더가 재실행되는조건, 이전에 상태가 바뀌었다는 것을 인지 해야지만,  

    render() {
        // console.log("render() 실행");
        // console.log(this.state.color);
        return(
            <div className="card">
                <div className="card-header">
                     ComName
                 </div>
                <div className="card-body">
                     <h3 style={{color:this.state.color}}>{this.state.number}</h3>
                     {/* 상태값이 다르면 리액트는 render를 다시 실행시켜서, 바뀐값이 들어간다. 리액트는 바뀐게 있어야 실행 */}
                     <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자증가</button>
                     <button className="btn btn-info btn-sm" onClick={this.changeColor}>색깔변경</button>

                 </div>
            </div>
        );
    }
}
export default ComAClass;
