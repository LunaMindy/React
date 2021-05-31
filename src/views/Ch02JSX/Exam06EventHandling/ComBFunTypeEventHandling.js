function ComBFunTypeEventHandling(props) {
    
    const handleBtn1 = (event) => {
        console.log("버튼1이 클릭되었습니다.");
        console.log(event.target.name); //btn1
        console.log(event.type); //click
    };
    const handleBtn2 = (event,x,y) => {
        const result = x+y;
        console.log("계산 결과 : "+result); //계산 결과 : 8
        console.log(event.target.name); //btn2
        console.log(event.type); //click

    };

    return(
        <div className="card">
        <div className="card-header">
        ComBFunTypeEventHandling 
        </div>
        <div className="card-body">
               <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼 1</button>
               {/* <button className="btn btn-info btn-sm mr-2" onClick="handleBtn1()">버튼 1</button>안된다. 함수호츨을 문자열로주면 안된다. 함수이름 만들어야함. */}
                <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => handleBtn2(event,3,5)}>버튼 2</button>
                {/* 값을 못주니까, 호출x 화살표 함수 안에 호출코드로 넣어준다. 실행문이 하나일땐 {} 생략 가능하다.{handleBtn2(3,5);} ->handleBtn2(3,5); */}
                {/* 매개값 주고싶을땐 어떻게 하느냐, 화살표 함수 안에 매개값을해준다. */}
                {/* 이벤트가 발생하게 되면, 이벤트 객체가 만들어진다. 자바스트립트문법과 좀 다르다. 
                자바스트립트는 . 아무것도 없이 바로 event 쓸수 있다.
                리액트에서는 evnet라는 객체를 매개값으로 받아야한다. 하지만 함수이름만 넣어주면 실행할때. 이벤트 객체 자동으로 들어온다. */}
            </div>
      </div>

    );
}
export default ComBFunTypeEventHandling;
