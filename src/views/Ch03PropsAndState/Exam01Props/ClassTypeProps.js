import React from "react";
import PropTypes from "prop-types";

class ClassTypeProps extends React.Component {//생성자 작성할 필요없다 기본적으로 props 받게 되어있음
/*  
    constructor(props){//생성자를 명시적으로 작성할땐 이렇게 해야한다.
        super(props);
        // console.log("클래스",props);
        // console.log("클래스",props.match);
        
    } 
    //디폴튼데 왜 작성했냐고 자꾸 나와서 주석처리!
*/
    render() {  
        return(
            <div className="card">
                <div className="card-header">
                    ClassTypeProps
                </div>
                <div className="card-body">
                    <div> name: {this.props.name} </div>  
                    <div> version: {this.props.version} </div>  
                    {this.props.children}{/* 자식내용이 들어간다. */}
                </div>
            </div>
        );
    }
}

//디폴트 속성값 설정
ClassTypeProps.defaultProps = { //클래스이름.defualtProps
    version: 17
};

//타입과 필수 설정
ClassTypeProps.propTypes = { //클래스이름.propTypes
    name: PropTypes.string.isRequired,
    version: PropTypes.number
};

export default ClassTypeProps;