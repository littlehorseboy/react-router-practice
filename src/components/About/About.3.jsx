import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Introduction extends React.Component {
  render() {
    console.log(this.props.match);
    return <p>這裡是理念介紹</p>;
  }
}

Introduction.propTypes = {
  match: PropTypes.object,
};

class History extends React.Component {
  render() {
    console.log(this.props.match);
    return <p>這裡是歷史沿革</p>;
  }
}

History.propTypes = {
  match: PropTypes.object,
};

class NoPage extends React.Component {
  render() {
    return <p>頁面維護中...</p>;
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>關於我們的選單</h2>
        <ul>
          <li>
            <Link to={this.props.match.url}>理念介紹</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/history`}>歷史沿革</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/story`}>品牌故事</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={this.props.match.url} component={Introduction} />
          <Route path={`${this.props.match.url}/history`} component={History} />
          <Route component={NoPage} />
        </Switch>
      </div>
    );
  }
}

About.propTypes = {
  match: PropTypes.object,
};

export default About;
