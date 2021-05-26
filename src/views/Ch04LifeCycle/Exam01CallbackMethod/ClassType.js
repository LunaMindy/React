import React from "react";

class ClassType extends React.Component{
/**
 * 어떤시점에 내가 원하는것이 있기 때문에 -> 라이프 사이클,
 * 
 */



    constructor(props){
        super(props);
        this.state={
            startNum:0,
            number:0       
        };
        console.log("constructor() 실행");
        this.handelIncrement = this.handelIncrement.bind(this);
    }//객체 만들때 한번만 실행
    
    handelIncrement(event){
        this.setState({
            ...this.state,
            number: this.state.number + 1
        });
    }


    //이부분에서 부모쪽에서 받은 프롭을  자신의 상태값으로 바꾸는 작업을 여기서 한다.
    static getDerivedStateFromProps(props, prevState){
        console.log("getDerivedStateFromProps() 실행");
        // console.log("props:",props);
        // console.log("prevState:",prevState);
        console.groupEnd();
        //static 에선 this 쓸수 없으니까.

        if(prevState.startNum !== props.startNum){
            return {
                //위에 this 값이 없어지고, 이부분이 새로운 상태가 된다.
                //기존 상태는 그대로 내버려두고, 비교해서, 다시 리렌더링 된다.
                //새로운 상태를 리턴 해야만이 이전상태와 비교가 된다.
                startNum: props.startNum,
                number:props.startNum,            
            };
    
        }else{
            return null;
            //props이 안바꼈는데 매번 다시 실행할 필요 없기때문.//새로운 값과 기존값이 다를 경우에만 새로운 값을.
            //null 은 기존상태를 유지하겠다.
        }
        //props가 갱신될때 상태값도 같이 갱신되도록 새로운 상태 리턴.ㄴ
      
    }//프롭이 바뀔때마다 실행.

    //어떤 상태면 렌더링 다시 할 필요 없을경우엔 return false 근데 기본값은 true.       
    shouldComponentUpdate(nextProps, nextState){
    console.group("shouldComponentUpdate()  실행");
    console.log("nextProps",nextProps);
    console.log("nextState",nextState);
    console.groupEnd();

    if(nextState.number%2 === 0){
        return true;
    }else{
        return false;
    }
 

    }

    componentDidUpdate(){
        console.log("componentDidUpdate() 실행");
    };
    componentDidMount(){
        console.log("componentDidMount() 실행");

    };


    render(){
        console.log("render() 실행");
        return (
            <div className="card">
            <div className="card-header">
            ClassType
            </div>
            <div className="card-body">
               <div>number:{this.state.number}</div> 
               <button className = "btn btn-info btn-sm mt-2" onClick={this.handelIncrement}>증가</button>
            </div>
        </div>
        )
    }

componentDidMount(){
    console.log("componentDidMount() 실행");
}

componentWillUnmount(){
    console.log("componentWillUnmount() 실행");
//컴포넌트가 제거 될때.
}
}

export default ClassType;