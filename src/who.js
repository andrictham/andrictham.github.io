import React, { Component } from 'react'
import Markdown from 'react-remarkable'

class Who extends Component{
  render() {
    return(
      <div>
        <h2>{this.props.pageIntro[0].fields.title}</h2>
        <Markdown>
          {this.props.pageIntro[0].fields.description}
        </Markdown>
      </div>
    );
  }
}

export default Who;
