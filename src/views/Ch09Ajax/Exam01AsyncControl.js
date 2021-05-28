import { useState } from "react";

function delayPromise(time) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("success");
      },time)

    });
    return promise;
}
//책에 잘못설명 -> 로딩을 전역데이터로 만들어서 리덕스로 관리 (X)

//컴포넌트안에서 쓰는 데이터를 가져오는건 여기서 해야지, 아무튼 상태정의해서  관리해야함
function Exam01AsyncControl(props) {
  const [loading, setLoading] = useState(false);

  //스피너가 언제 사라지는지
  
  // const handleRequest = (event) => {
  //   setLoading(true);
  //   delayPromise(3000)//얘 자체가 propmise 리턴한다.
  //   .then(result => {})//성공
  //   .catch(error => {})//실패 예외발생
  //   .finally(() => {
  //     setLoading(true);
  //   })//예외와 상관없이 그냥 실행.

  // };

  const handleRequest = async (event) => {//async 쓸때는 반드시 trycatch await
    setLoading(true);
    try {
      const result = await delayPromise(3000); //await 여러버 ㄴ쓸수있으니까. 걍 직관적으로 읽으면 되는데 위에꺼는 복잡함. 이방법 알아둬라
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }

  };


    return(
        <div className="card">
        <div className="card-header">
        Exam01AsyncControl
        </div>
        <div className="card-body">
          <button className="btn btn-primary btn-sm mr-2" onClick={handleRequest}>데이터 요청</button>
          <div className = "mt-3">  
            {loading?
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only">로딩 중...</span>
                </div>
                :
                <div>로딩 완료</div> //   {loading?} 얘가 false일 경우

            }
          </div>
        </div>
      </div>

    );
}
export default Exam01AsyncControl;

//어차피 로딩되는 값으 트루였다가 false로 바뀐다고 ui 바껴버리면 문제가 생길수있음. 또 동시에 여러가지 받을수있는데, 하나가 남았는데 갑자기 바껴버리면, 문제가 생긴다. 상태가 되어야한다. 어마운트가 되지않는다면, 계속 유지되어야한다. 한페이지가 데이터를 받고있는 상태!