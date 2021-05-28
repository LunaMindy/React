const initialState = {
    uid: "",
    authToken: ""
};

//대문자가 관례, 상수는 아니지만 상수처럼 쓴다고해서~
const SET_UID = "auth/setUid";
const SET_AUTH_TOKEN = "auth/setAuthToken";// "auth/setAuthToken"; 문자열 마음대로 해도 된다. 이렇게 하는 이유? 중복방지, 파일 많은데 충돌안나게!

export const createSetUidAction = (uid) =>{
    return {type:SET_UID, uid};
};

export const createSetAuthTokenAction = (authToken) =>{
    return {type:SET_AUTH_TOKEN, authToken};
};


const authReducer = (state=initialState, action) => {
    if(action.type === SET_UID){
     
        return {...state, uid:action.uid}
    }else if(action.type === SET_AUTH_TOKEN){// return {type:SET_AUTH_TOKEN, authToken}; 이 액션객체 들어왔을때. 여기서 새로운 액션객체 만든다.
        
        return {...state, authToken:action.authToken};
    }else{
        return state;
    }
};

export default authReducer;