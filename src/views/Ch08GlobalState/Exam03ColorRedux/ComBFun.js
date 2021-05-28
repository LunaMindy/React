import { useDispatch, useSelector, useStore } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun() {
    // const color = useSelector((state) => {
    //     return state.colorReducer.color
    // });
    const color = useSelector((state) => state.colorReducer.color);
    const dispatch = useDispatch(); //스토어에 디스패치 함술ㄹ 얻어낸다

/*     const store = useStore(); //위 두개 말고 아예 스토어를 막바로 얻어낼수있다. 밑에 두개로 얻으면 된다. 하지만 위에가 훨씬 간단~
    const color = store.state.colorReducer.color;
    const dispatch = store.dispatch; */

    //색깔을 그린으로 바꿔치기해다오 라고 통보한다
    const handleChange = (event) => {
        dispatch(createSetColorAction("green"));
        // dispatch({type:"color/setColor", color:"green"});
    };

    return(
        <div className="card">
        <div className="card-header">
         ComBFun
        </div>
        <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
                <div style={{backgroundColor:color}}>
                    내용
                </div>
        </div>
      </div>

    );
}
export default ComBFun;
