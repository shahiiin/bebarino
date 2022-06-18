import { Switch, Route } from "react-router-dom";
import { userRoutes } from "./router/allRoutes";

function App() {
  return (
    <>
      <Switch>
        {userRoutes.map((route, idx) => (
          <Route key={idx} exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </>
  );
}

export default App;
