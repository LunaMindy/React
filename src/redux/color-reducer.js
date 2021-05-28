//상태 초기값 선언
const initialState = {
    color:"yellow"
}; //처음 컴포넌트가 전역 데이터를 읽을때. 이값이

//액션 타입 선언
const SET_COLOR = "color/setColor";//액션타입의 이름 "color/setColor" 

//액션 생성 함수 선언
export const createSetColorAction = (color) =>{
    return {type:SET_COLOR, color};
};

//리듀스 선언
//여기에 들어가있다. state값이 주어지지않ㅇ면 initialState 값을 디폴트로 하겠다.
const colorReducer = (state=initialState, action) => {
    if(action.type === SET_COLOR){
        //새로운 상태객체를 만들어서 리턴하게끔
        //setcolor 면 새 상태 만들어서 리턴해라
        return {color: action.color}
    }else{
        //if문에 해당하지않으면, 이전상태를 리턴
        return state;
    }
};

export default colorReducer;