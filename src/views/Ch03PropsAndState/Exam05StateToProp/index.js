import { useState } from "react";
import Child from "./Child";

function Exam05StateToProp() { 
    const [img, setImg] = useState("photo1.jpg");
    //바뀐데이터가.

    const changeImg = () => {
        if(img === "photo1.jpg"){
            setImg("photo2.jpg");
        }else{
            setImg("photo1.jpg");
        }
    };
    return(
        //리렌더링이 되면 다시 실행된다. 바뀐ui
        <div className="card">
        <div className="card-header">
        Exam05StateToProp
        </div>
        <div className="card-body">
            {/* 리렌더링하면 새로운 img 값 들어감 */}
         <Child img={img} changeImg={changeImg}/>
         <Child img={img} changeImg={changeImg}/> {/* 부모의 상태변경 함수를 프롭으로 전달해서 자식쪽으로 전달 */}

         {/* 프롭으로 또 전달. */}
        </div>
      </div>

    //   부모상태바뀌니까 자식프롭 바뀐다. 프롭이 바뀌니까 다시 리렌더링 된다.

    );
}
export default Exam05StateToProp;
