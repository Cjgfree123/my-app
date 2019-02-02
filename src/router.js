import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App.js';

// 放components里
function Home() {
  return <h1>Hello 主页!</h1>;
};

function User() {
  return <h1>Hello User!</h1>;
};

function PageNotFound() {
  return <h1>404</h1>;
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={User} />
          <Route path="/page-you-dont-know" exact component={PageNotFound} />
          <Redirect to='/' />
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
