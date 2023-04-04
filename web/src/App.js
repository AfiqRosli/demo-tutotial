import { ToastContainer } from "react-toastify";
import Navbar from "./Component/Navbar";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Component/Home";
import AddTask from "./Component/AddTask";
import UpdateTask from "./Component/UpdateTask";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/add">
          <AddTask />
        </Route>
        <Route path="/update/:id">
          <UpdateTask />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
