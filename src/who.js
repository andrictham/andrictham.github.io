import React, { Component } from "react"
import { Link } from "react-router"
import _getPageIntro from "./utils/_getPageIntro"

class Who extends Component {

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    let skills = this.props.skill
    return (
      <div className="who">
        {_getPageIntro(array, path)}
        <a href={this.props.profile.resumePdf.fields.file.url} download={this.props.profile.resumePdf.fields.title}>
          Download my resume in PDF
        </a>
        <a href={this.props.profile.linkedInProfile} target="_blank">
          Find me on LinkedIn
        </a>
        <h3>My Philosophy</h3>
        <p>{this.props.profile.philosophy}</p>
        <h4>{this.props.writing[0].fields.title}</h4>
        <p>{this.props.writing[0].fields.quote}</p>
        Read more on <a href={this.props.writing[0].fields.link} target="_blank">{this.props.writing[0].fields.publicationName}</a>
        <h3>Experience</h3>
        <h3>Skills</h3>
        {
          skills.map((skill) => {
            return <span key={skill.sys.id} className="tag">{skill.fields.name}</span>
          })
        }
        <h3>Tools</h3>
        <h3>Don't be shy</h3>
        <Link to="contact">Send me an email</Link>
        <a href={this.props.profile.linkedInProfile} target="_blank">
          Add me on LinkedIn
        </a>
        <Link to="/work">Check out my work</Link>
      </div>
    )
  }
}

export default Who;
