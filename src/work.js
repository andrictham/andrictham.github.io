import React, { Component } from "react"
import _getPageIntro from "./utils/_getPageIntro"
import _getProjects from "./utils/_getProjects"

class Work extends Component{

  render() {
    let path = this.props.location.pathname
    let intros = this.props.pageIntro
    let projects = this.props.project
    return (
      <div className="work">
        {_getPageIntro(intros, path)}
        <h3>Latest Projects</h3>
        {_getProjects(projects)}
      </div>
    )
  }
}

export default Work;
