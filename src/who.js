import { Component } from 'react'
import getPageIntro from './utils/_getPageIntro'

class Who extends Component{

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    return getPageIntro(array, path)
  }
}

export default Who;
