import Box from "./Box";
import Button from "./Button";

/* 이런방식으로도 컴포넌트가 있다는 정도 참고로 알아둬라.
나만의 컴포넌트 단품으로 만들어서 라이브러리화 해서 가지고다니면서 프로젝트마다 사용할수 있도록 하면 좋다.
하지만 3차땐 추천 안함
 */
function Exam03StyledComponent() {
    return(
        <div className="card">
        <div className="card-header">
        Exam03StyledComponent
        </div>
        <div className="card-body">
            <Box>
                Box 컴포넌트입니다.
                <Button>버튼1</Button>
                <Button inverted={true}>버튼2</Button>
            </Box>
        </div>
      </div>

    );
}
export default Exam03StyledComponent;
