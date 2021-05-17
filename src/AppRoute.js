import { Redirect, Route, Switch } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Home from "./views/Home"

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponentDeclaration}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute; 