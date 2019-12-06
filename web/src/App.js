import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";
import AddDish from "./containers/AddDish/AddDish";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dishes}/>
            <Route path="/dishes" exact component={Dishes}/>
            <Route path={"/dishes/add"} exact component={AddDish}/>
            <Route path="/orders" exact component={Orders}/>
            <Route render={() => {
              return (
                  <div style={{textAlign: "center"}}>
                    <h1>404 <br/> Page Not Found!</h1>
                  </div>
              );
            }}/>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
