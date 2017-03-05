import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';
import contentful from 'contentful'
import Home from './home'
import { Stuff, StuffIWant } from './stuff'
import Contact from './contact'
import './index.css';

var destination = document.querySelector("#root");

// get Contentful access
var client = contentful.createClient({
  accessToken: '73709362a492ae7cd77aad25734791ac45d7c1af75d8ef35f0248b430bbd0459',
  space: 'tdrpnmgt2t7o'
})

class App extends Component{

  constructor() {
    super()
    this.state = {
      who: [],
      work: [],
      contact: []
    }
    this.getContent = this.getContent.bind(this)
  }

  getContent() {
    client.getEntries({
    content_type: 'workExperience'
  }).then((entries) => {
      this.setState({work: entries.items})
      console.log(entries.items)
    })
  }

  componentWillMount() {
    this.getContent()
  }

  render() {
    return (
      <div>
        <h1>Create React App + React Router in ES6 Example</h1>
        <ul className="header">
          <li> <IndexLink to="/" activeClassName="active"> Home </IndexLink> </li>
          <li> <Link to="/stuff" activeClassName="active"> Stuff </Link> </li>
          <li> <Link to="/contact" activeClassName="active"> Contact </Link> </li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="who" component={Who} who={this.state.who} />
      <Route path="work/:url" component={Work} work={this.state.work} />
      <Route path="contact" component={Contact} contact={this.state.contact} />
    </Route>
  </Router>,
  destination
);
