import React, { Component } from 'react'
import getPageIntro from './utils/_getPageIntro'

class Contact extends Component{

  render() {
    let path = this.props.location.pathname
    let array = this.props.pageIntro
    let formspreeURL= "//formspree.io/" + this.props.profile.email

    return (
      <div className="contact">
        {getPageIntro(array, path)}

        <form id="contactform" method="POST" action={formspreeURL}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="_replyto" placeholder="Your email address" />
          <input type="hidden" name="_subject" value="Website contact" />
          <textarea name="message" placeholder="Your message"></textarea>
          <input type="text" name="_gotcha" style={{display: "none"}} />
          <input type="submit" value="Send" />
        </form>

      </div>
    )
  }
}

export default Contact;
