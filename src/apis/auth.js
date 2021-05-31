import axios from "axios";

export function login(user) { //export모듈
    const promise = axios.post("/auth/login",user); //promise 리턴하는데, 이메소드에서 프로미스를 직접적으로 사용하진않는다, 리턴만 함! 
    return promise;
}

export function join(user) {
    const promise = axios.post("/auth/join", user);
    return promise;
}