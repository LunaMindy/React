import {Route, Switch} from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

function Ch01ComponentDeclaration(props) { //컴포넌트 이름
  console.log(props);
  return (
    <div className="card">
      <div className="card-header">
        Ch01ComponentDeclaration
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/coma`} exact component={ComA}/>
          <Route path={`${props.match.url}/comb`} exact component={ComB}/>
        </Switch>
      </div>
    </div>
  );
}

export default Ch01ComponentDeclaration;