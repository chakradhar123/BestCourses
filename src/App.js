import { Switch, Route } from "react-router-dom";
import AppRouter from './AppRouter'
import "./app.css";
function App() {
  console.log(process.env.apiKey)
  return (
    <div className="App">
     <Switch>
        <Route path={"/"} component={AppRouter} />
      </Switch>

    </div>
  );
}

export default App;
