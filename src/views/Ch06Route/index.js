import { Route, Switch } from "react-router-dom";
import BoardRead from "./BoardRead";
import BoardTable from "./BoardTable";
import BoardUpdateForm from "./BoardUpdateForm";
import BoardWriteForm from "./BoardWriteForm";

function Ch06Route(props) {
    return(
        <div className="card">
        <div className="card-header">
            Ch06Route
        </div>
        <div className="card-body">
            <Switch>
                <Route path={`${props.match.url}`} exact component={BoardTable}/>
                <Route path={`${props.match.url}/:bno/read`} exact component={BoardRead}/>
                <Route path={`${props.match.url}/:bno/updateForm`} exact component={BoardUpdateForm}/>
                <Route path={`${props.match.url}/writeForm`} exact component={BoardWriteForm}/>

                {/*ch06/1/read 변수이름 bno 로 받겠다. */}
                    

            </Switch>
        </div>
      </div>

    );
}
export default Ch06Route;
