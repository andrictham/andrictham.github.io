import React, { Component } from 'react'
import getPageIntro from './utils/_getPageIntro'

class Contact extends Component{

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    return (
      <div className="contact">
        {getPageIntro(array, path)}
      </div>
    )
  }
}

export default Contact;
