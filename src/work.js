import React, { Component } from 'react'
import getPageIntro from './utils/_getPageIntro'

class Work extends Component{

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    return (
      <div className="work">
        {getPageIntro(array, path)}
      </div>
    )
  }
}

export default Work;
