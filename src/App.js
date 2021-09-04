import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginIn from './components/Loginin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
         <Route path="/signup" component={SignUp} exact />
         <Route path="/" component={LoginIn} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;