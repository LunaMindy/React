import React from "react";

class ComAClassTypeEventHandling extends React.Component {  
    constructor(props) {
        super(props);
        //방법1
        this.handleBtn1 = this.handleBtn1.bind(this);
        this.handleBtn2 = this.handleBtn2.bind(this);
        this.handleBtn3 = this.handleBtn3.bind(this);
        this.handleBtn4 = this.handleBtn4.bind(this);

    }

    method1(){
        console.log("method1() 실행");

    }
    //방법1
    handleBtn1(event){
        console.log("버튼1이 클릭되었습니다.");
        console.log(event.target.name); //btn1
        console.log(event.type);//click
        this.method1(); //method1() 실행
    }
    handleBtn2(event, x, y){
        const result = x+y;
        console.log("계산 결과 : "+result); //계산 결과 : 8
        console.log(event.target.name); //btn2
        console.log(event.type); //click
        this.method1(); //method1() 실행
    }
    //방법2
    handleBtn3(event){
        console.log("버튼3이 클릭되었습니다.");
        console.log(event.target.name); //btn3
        console.log(event.type); //click
        this.method1(); //method1() 실행
    }
    handleBtn4(event){
        console.log("버튼4이 클릭되었습니다.");
        console.log(event.target.name); //btn4
        console.log(event.type); //click
        this.method1(); //method1() 실행
    }
    render() {
        return (
            <div className="card">
            <div className="card-header">
            ComAClassTypeEventHandling 
            </div>
            <div className="card-body">
                <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼 1</button>
                {/* 못찾는다. this 붙이자 */}
                <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => this.handleBtn2(event,3,5)}>버튼 2</button>
                <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼 3</button>
                <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn4}>버튼 4</button>
            </div>
          </div>
        );
    }

}
export default ComAClassTypeEventHandling;