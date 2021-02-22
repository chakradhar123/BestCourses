import { Switch, Route } from "react-router-dom";
import AppRouter from './AppRouter'
import "./app.css";
function App() {
  
  return (
    <div className="App">
     <Switch>
        <Route path={"/"} component={AppRouter} />
      </Switch>

    </div>
  );
}

export default App;
