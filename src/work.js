import React, { Component } from 'react'
import Markdown from 'react-remarkable'

class Work extends Component{
  render() {
    return(
      <div>
        <h2>{this.props.pageIntro[1].fields.title}</h2>
        <Markdown>
          {this.props.pageIntro[1].fields.description}
        </Markdown>
      </div>
    );
  }
}

export default Work;
