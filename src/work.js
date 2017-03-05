import React, { Component } from 'react'
import _getPageIntro from './utils/_getPageIntro'

class Work extends Component{

  render() {
    let path = this.props.location.pathname
    let intros = this.props.pageIntro
    return (
      <div className="work">
        {_getPageIntro(intros, path)}
        <h3>Latest Projects</h3>

      </div>
    )
  }
}

export default Work;
