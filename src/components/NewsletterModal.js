import React from "react"
import { Link } from "gatsby"

import loadable from '@loadable/component';


import addToMailchimp from 'gatsby-plugin-mailchimp';


import '../scss/newsletter-modal.scss';
import '../scss/back-home-logo.scss';
import purpleFireImg from "../../static/purplefire.gif";
import logoImg from "../../static/CMB_logo.png";

import { useCookies } from 'react-cookie';
class NewsletterModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "",
      canSubmit: false,
      shouldShow: true
    }

  }

  componentDidMount()
  {
    const localStorage = typeof window !== 'undefined' && window.localStorage

    var willShowModal = true;

    var alreadySignedUp = localStorage.getItem('isInNewsletter');
    if (alreadySignedUp != null)
    {
      willShowModal = false;
    }

    this.setState({shouldShow: willShowModal});
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var input = event.target;

     if (input.value.match(validRegex)) {
       input.classList.remove("error");
      this.setState({canSubmit: true});
     } else {
       this.setState({canSubmit: false});

       input.classList.add("error");

       this.state.message = "Please enter a valid email"
     }

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.canSubmit)
    {

      const result = await addToMailchimp(this.state.email);
      this.setState({ message: result.msg });

      if (result.result === "success")
      {
        const localStorage = typeof window !== 'undefined' && window.localStorage
        localStorage.setItem('isInNewsletter', true);
      }
    }
  };

  hideModal() {
    this.setState({shouldShow: false });
  }

  render() {
    if (!this.state.shouldShow)
      return (<div />);

    return (
      <div className="newsletter-modal">

        <div className="modal">
          <div className="modal-header">
            <div className="back-home-logo">

              <div className="logo-circle">
                <img src={purpleFireImg} className="gray-flames" alt="Purple Flames" />
                <img src={logoImg} className="game-logo" alt="Codename: Mystery Babylon Logo" />
              </div>
            </div>

            <div className="header-title">
              <h2>Want to see our progress?</h2>
            </div>
          </div>

          <div className="modal-body">
            <p> Stay updated about alpha & beta testing releases.</p>

            <div className="mailing-list-form">
              <div className="message"  dangerouslySetInnerHTML={{ __html: this.state.message }} />

              <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form">
                <div className="form-row">
                    <label>
                        <span className="screen-reader-text">Email address</span>
                        <input
                            ref="emailField"
                            className="subscribe-email"
                            type="email"
                            name="email"
                            placeholder="Enter Email Address..."
                            value={this.state.email}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </label>

                </div>
                <button className="button" type="submit" onClick={this.handleSubmit.bind(this)}>
                    Subscribe
                </button>
            </form>

            </div>
          </div>
        </div>
        <div className="overlay" onClick={this.hideModal.bind(this)} />
      </div>
    )
  }
}

export default NewsletterModal;
