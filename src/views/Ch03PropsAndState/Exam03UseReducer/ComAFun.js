import { useReducer } from "react";



  //어떤게 상태를 변경할건지 내용을 갖고있는 함수, 뭘 변경하고 싶어~ 하는 통보내용을 action으로 받아서
//방법1 
//상태를 정의할때 이미 만들어야 한다.
//상태를 변경하느 함수
// function reducer(prevState,action) { //reducer 얘가 통보 받음 ->action
//   if(action.type === "INCREMENT"){
//     return { number: prevState.number + 1};
//   }else if(action.type === "DECREMENT"){
//     return {number: prevState.number - 1};
//   }
//     return null;
// }

//방법2
import reducer from "./number-reducer";

function ComAFun(props) {
    /**
     * state: 초기 상태
     * dispatch: 상태 변경 통보 함수
     */

    // const[state, setState] = useState({
    //     number: 0
    // });

    /**
     * 함수형 클래스에서 useReducer()Hook 이용한 상태관리
     * 상태변화에 사용되는 코드를 함수로 묶어 코드 재사용성을 높여준다.
     * const[state, dispatch] = useReducer(reducer,초기값);
     */
    const[state, dispatch] = useReducer(reducer, {number:0}); //처음 state에는 {number:0} 얘가 저장되어 있다.


    //이벤트 처리 함수
    const incrementCounter = (event) => {
      //상태 변경 통보

      /**
       * dispatch() 함수: 상태변경을 요청하는 함수
       * -reducer(state, action) 함수 자동 콜백
       */
      dispatch({type:"INCREMENT"});
    };
    const decrementCounter = (event) => {
      //상태 변경 통보
      dispatch({type:"DECREMENT"});

      ///통보는 누가 받는다?

    };


    return(
        <div className="card">
        <div className="card-header">
          ComAFun
        </div>
        <div className="card-body">
          <p>현재 카운트 값: {state.number}</p>
          <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
          <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
        </div>
      </div>
    );
}
export default ComAFun;
