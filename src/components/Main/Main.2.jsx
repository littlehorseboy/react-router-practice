import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../Title/Title.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Hello extends React.Component {
  render() {
    return <h1>Hello! {this.props.match.params.userName}</h1>;
  }
}

Hello.propTypes = {
  match: PropTypes.func,
};

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Title title="功能選單" />
          <ul>
            <li>
              <Link to="/">回到首頁</Link>
            </li>
            <li>
              <Link to="/about">關於我們</Link>
            </li>
            <li>
              <Link to="/hello/horse">用 Component 渲染組件</Link>
            </li>
            <li>
              <Link to="/hey/QQ">用 render 渲染組件</Link>
            </li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/hello/:userName' component={Hello} />
          <Route path='/hey/:userName' render={props => <h1>Hey! {props.match.params.userName}</h1>} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
