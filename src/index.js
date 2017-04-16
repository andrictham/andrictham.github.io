import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from "react-router"
import contentful from "contentful"
import Nav from "./components/Nav"
import Home from "./views/home"
import Who from "./views/who"
import Work from "./views/work"
import Contact from "./views/contact"
import "./index.css"

var destination = document.querySelector("#root");

// get Contentful access
var client = contentful.createClient({
  accessToken: "73709362a492ae7cd77aad25734791ac45d7c1af75d8ef35f0248b430bbd0459",
  space: "tdrpnmgt2t7o"
})

class App extends Component{

  constructor() {
    super()
    this.state = {
      pageIntro: [
        {
          fields: {
            page: "",
            title: "",
            description: ""
          }
        }
      ],
      profile: {
        photo: {
          fields: {
            file: {
              url: ""
            }
          }
        },
        resumePdf: {
          fields: {
            file: {
              fileName: "",
              url: ""
            },
            title: ""
          }
        }
      },
      skill: [
        {
          fields: {
            name: ""
          },
          sys: {
            id: ""
          }
        }
      ],
      tool: [
        {
          fields: {
            name: "",
            logo: {
              fields: {
                file : {
                  url: ""
                }
              }
            }
          },
          sys: {
            id: ""
          }
        }
      ],
      project: [
        {
          fields: {
            caseStudy: "",
            headline: "",
          },
          sys: {
            id: ""
          }
        }
      ],
      writing: [
        {
          fields: {
            link: "",
            publicationName: "",
            quote: "",
            title: ""
          }
        }
      ]
    }
  }

  componentWillMount() {
    client.getEntries({
      content_type: "pageIntro"
    }).then((entries) => {
        this.setState({pageIntro: entries.items})
      })
    client.getEntries({
      content_type: "profile"
    }).then((entries) => {
        this.setState({profile: entries.items[0].fields})
      })
    client.getEntries({
      content_type: "skill"
    }).then((entries) => {
      this.setState({skill: entries.items})
    })
    client.getEntries({
      content_type: "tool"
    }).then((entries) => {
        this.setState({tool: entries.items})
      })
    client.getEntries({
      content_type: "project"
    }).then((entries) => {
        this.setState({project: entries.items})
      })
    client.getEntries({
      content_type: "writing"
    }).then((entries) => {
        this.setState({writing: entries.items})
      })
  }

  render() {
  var children = React.Children.map(
    this.props.children, (child) => {
      return React.cloneElement(child, {
        pageIntro: this.state.pageIntro,
        profile: this.state.profile,
        skill: this.state.skill,
        tool: this.state.tool,
        project: this.state.project,
        writing: this.state.writing
      })
    }
  )
    return (
      <div>
        <Nav />
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
