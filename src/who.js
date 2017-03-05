import React, { Component } from 'react';

class Who extends Component{
  render() {
    return(
      <div>
        <h2>{this.props.pageIntro[0].fields.title}</h2>
      </div>
    );
  }
}

export default Who;
