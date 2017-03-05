import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'
import contentful from 'contentful'
import Home from './home'
import Who from './who'
import Work from './work'
import Contact from './contact'
import './index.css'

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
      pageIntro: [
        {
          fields: {
            page: '',
            title: '',
            description: ''
          }
        },
        {
          fields: {
            page: '',
            title: '',
            description: ''
          }
        },
        {
          fields: {
            page: '',
            title: '',
            description: ''
          }
        }
      ],
      profile: {
        photo: {
          fields: {
            file: {
              url: ''
            }
          }
        }
      },
      who: [],
      work: [],
      contact: []
    }
  }

  componentWillMount() {
    client.getEntries({
      content_type: 'pageIntro'
    }).then((entries) => {
        this.setState({pageIntro: entries.items})
      })
    client.getEntries({
      content_type: 'profile'
    }).then((entries) => {
        this.setState({profile: entries.items[0].fields})
      })
  }

  render() {
  var children = React.Children.map(
    this.props.children, (child) => {
      return React.cloneElement(child, {
        pageIntro: this.state.pageIntro,
        profile: this.state.profile,
        who: this.state.who,
        work: this.state.work,
        contact: this.state.contact
      })
    }
  )
    return (
      <div>
        <h1>Create React App + React Router in ES6 Example</h1>
        <ul className="header">
          <li> <IndexLink to="/" activeClassName="active"> Andric </IndexLink> </li>
          <li> <Link to="/who" activeClassName="active"> Who? </Link> </li>
          <li> <Link to="/work" activeClassName="active"> Work </Link> </li>
          <li> <Link to="/contact" activeClassName="active"> Contact </Link> </li>
        </ul>
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="who" component={Who} />
      <Route path="work" component={Work} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  destination
);
