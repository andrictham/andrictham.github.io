import React, { Component } from 'react'
import Markdown from 'react-remarkable'

class Contact extends Component{
  render() {
    return(
      <div>
        <h2>{this.props.pageIntro[2].fields.title}</h2>
        <Markdown>
          {this.props.pageIntro[2].fields.description}
        </Markdown>

      </div>
    );
  }
}

export default Contact;
