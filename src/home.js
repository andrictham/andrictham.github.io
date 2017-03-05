import React, { Component } from 'react';
import contentful from 'contentful'

// get Contentful access
var client = contentful.createClient({
  accessToken: '73709362a492ae7cd77aad25734791ac45d7c1af75d8ef35f0248b430bbd0459',
  space: 'tdrpnmgt2t7o'
})

class Home extends Component {

  constructor() {
    super()
    this.state = {
      photo: {
        fields: {
          file: {}
        }
      },
    }
  }

  componentWillMount() {
    client.getEntries({
      content_type: 'profile'
    }).then((entries) => {
        this.setState({...entries.items[0].fields})
      })
  }

  render() {
    return (
      <div>
        <img src={this.state.photo.fields.file.url} style={{height:'100px', borderRadius: '50%'}} alt='profile-pic'/>
        <h2>{this.state.name}</h2>
        <h4>{this.state.title}</h4>
        <p>{this.state.writeup}</p>
        <p>{this.state.location}</p>
        <p>{this.state.currentPosition}</p>
      </div>
    );
  }
}

export default Home
