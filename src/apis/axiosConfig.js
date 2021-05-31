import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";//기본데이터

export function addAuthHeader(authToken) {
    axios.defaults.headers.common["authToken"] =authToken;
};//헤더에 authtoken이 있어야 하니까, 매번 안넣어줘도 되고, 요청개수들을 추가할때 자동적으로 헤더에 들어갈수 있도록,
// 로그인이 성공했을때, 호출해서 추가한다.

export function removeAuthHeader() {
  delete  axios.defaults.headers.common["authToken"];
}
//로그아웃했을때, 더이상 헤더에 토큰을 전송하지않도록 제거해준다.