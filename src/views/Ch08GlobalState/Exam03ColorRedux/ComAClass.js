import React from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

class ComAClass extends React.Component { 

    constructor(props){//여기다 props로 넣어준다.
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }
    //클래스형이 최초의 react 나왔을대 소개 되어서, 그러니까 뭘 나와도 계속 추가되니까 지저분한 코드가 되어버린다.
    handleChange(event){
        this.props.setColor("red");

    }


    render() {
        return (
            <div className="card">
            <div className="card-header">
            ComAClass 
            </div>
            <div className="card-body">
            <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
                <div style={{backgroundColor:this.props.color}}>
                    내용
                </div>

            </div>
          </div>
        );
    }

}

const mapStateToProps = (state) => {
    //맴 매칭 = 상태를 프롭으로 전달하겠다.
 return{
    color:state.colorReducer.color//color이름/ 프롭의 값 state.colorReducer.color 
}};

const mapDispatchToProps = (dispatch) => {
    return{
        setColor: (color) => dispatch(createSetColorAction(color))
    }
};
//connext 라는 함수를 통해서

//스토어가 가진내용을 컴포넌트와 연결시켜준다. 커넥트~
export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);