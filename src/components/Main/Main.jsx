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
  match: PropTypes.object,
};

class CustomLink extends React.Component {
  render() {
    return (
      <Route path={this.props.to} children={(props) => {
        console.log(props.match);
        return (
          <li>
            {props.match ? '>' : ''}
            <Link to={this.props.to}>{this.props.name}</Link>
          </li>
        );
      }} />
    );
  }
}

CustomLink.propTypes = {
  to: PropTypes.string,
};

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Title title="功能選單" />
          <ul>
            <CustomLink to="/" name="回到首頁"></CustomLink>
            <CustomLink to="/about" name="關於我們"></CustomLink>
            <CustomLink to="/hello/horse" name="用 Component 渲染組件"></CustomLink>
            <CustomLink to="/hey/QQ" name="用 render 渲染組件"></CustomLink>
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
