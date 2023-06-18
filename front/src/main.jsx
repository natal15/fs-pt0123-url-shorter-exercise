import React from 'react'
import ReactDOM from 'react-dom/client'



import Provider from "./context/Provider";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Register from "./pages/Register";
import { Switch, Route, Redirect } from "wouter";
import Guard from "./components/Guard";

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/">
          <Guard component={Panel} />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

