import React, { Component } from "react";
import { Link } from 'react-router'

class Home extends Component {

  render() {
    return (
      <section className="section">
        <div className="card">
          <div className="card-content">
            <img src={this.props.profile.photo.fields.file.url} style={{height:"100px", borderRadius: "50%"}} alt="profile-pic"/>
            <h2>{this.props.profile.name}</h2>
            <h4>{this.props.profile.title}</h4>
            <p>{this.props.profile.writeup}</p>
          </div>
          <div className="card-content" style={{ borderTop: "1px solid grey" }}>
            <p>{this.props.profile.location}</p>
            <p>{this.props.profile.currentPosition}</p>
          </div>
        </div>
        <Link to="/who" className="button" style={{ width: "100%" }}>More about me</Link>
        <Link to="/contact" className="button" style={{ width: "100%" }}>Get in touch</Link>
      </section>
    );
  }
}

export default Home
