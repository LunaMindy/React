import classNames from "classnames/bind";
import { useState } from "react";
import style from "./style.module.css";

const cx = classNames.bind(style);

function Exam01Css() {
    const [state, setState] = useState({
        userId:null
    });

    return(
        <div className="card">
        <div className="card-header">
        Exam01Css
        </div>
        <div className="card-body">
        <div className={style.wrapper}>
          Hello, React1
        </div>
        {/* <div className={style.wrapper + " " + style. inverted+"mt-3"}>
          Hello, React2
        </div> */}
        <div className={style.wrapper + " " + style. inverted + " mt-3"}>
          Hello, React2
        </div>

        <div className={`${style.wrapper} ${style.inverted} mt-3` }>
          Hello, React3
        </div>

        {state.userId === null?
        
        <div className={classNames(style.wrapper, style.inverted,"mt-3")}>
        Hello, React4
      </div>
        :
        <div className={classNames(style.wrapper,"mt-3")}>
        Hello, React4
        </div>
        } 

        {/* 위에꺼를 한줄로 작성 */}
        <div className={classNames(style.wrapper,  {[style.inverted]:state.userId ===null},"mt-3")}>
            {/* 트루면 inverted가 적용되고 false 면 적용 안된다. */}
        Hello, React5
        </div>

        <div className={cx("wrapper",  {inverted:state.userId ===null},"mt-3")}>
        Hello, React6
        </div>
        </div>
      </div>

    );
}
export default Exam01Css;
