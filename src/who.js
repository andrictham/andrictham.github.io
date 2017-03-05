import React, { Component } from 'react'
import getPageIntro from './utils/_getPageIntro'

class Who extends Component{

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    return (
      <div className='who'>
        {getPageIntro(array, path)}

        <h3>My Philosophy</h3>
        <p>{this.props.writing[0].fields.quote}</p>
        <p>Read more on <a href={this.props.writing[0].fields.link} target="_blank">{this.props.writing[0].fields.publicationName}</a></p>
      </div>
    )
  }
}

export default Who;
