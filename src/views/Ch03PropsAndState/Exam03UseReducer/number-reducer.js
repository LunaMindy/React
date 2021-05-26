/**
 * reducer(state, action)함수 : 상태를 변경을 하는 함수, 선언 필요.
 * -state:현재상태
 * -action:업데이트를 위해 필요한 정보를 가진 객체
 */

function reducer(prevState,action) { //reducer 얘가 통보 받음 ->action
    //state 는 현재 상태.
    if(action.type === "INCREMENT"){
      return { number: prevState.number + 1};

    }else if(action.type === "DECREMENT"){
      return {number: prevState.number - 1};
    }
      return null;
  }
  export default reducer;