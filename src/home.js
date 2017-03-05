import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>
        <img src={this.props.profile.photo.fields.file.url} style={{height:"100px", borderRadius: "50%"}} alt="profile-pic"/>
        <h2>{this.props.profile.name}</h2>
        <h4>{this.props.profile.title}</h4>
        <p>{this.props.profile.writeup}</p>
        <p>{this.props.profile.location}</p>
        <p>{this.props.profile.currentPosition}</p>
      </div>
    );
  }
}

export default Home
