import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    submit: true,
    isFirstEmpty: false,
    isLastEmpty: false,
  }

  isEmptyFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({
        isFirstEmpty: true,
      })
    }
  }

  isEmptyLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({
        isLastEmpty: true,
      })
    }
  }

  getFirstName = event => {
    this.setState({firstName: event.target.value, isFirstEmpty: false})
  }

  getLastName = event => {
    this.setState({lastName: event.target.value, isLastEmpty: false})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.isEmptyFirstName()
      this.isEmptyLastName()
    } else if (firstName === '') {
      this.isEmptyFirstName()
    } else if (lastName === '') {
      this.isEmptyLastName()
    } else {
      this.setState(prevState => ({
        submit: !prevState.submit,
      }))
    }
  }

  getAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      submit: true,
      isFirstEmpty: false,
      isLastEmpty: false,
    })
  }

  render() {
    const {isFirstEmpty, isLastEmpty, firstName, lastName, submit} = this.state

    return (
      <div className="appContainer">
        <h1 className="heading">Registration</h1>
        <div className="cardContainer">
          {submit ? (
            <form onSubmit={this.submitForm} className="formContainer">
              <label className="label" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                onBlur={this.isEmptyFirstName}
                onChange={this.getFirstName}
                value={firstName}
                placeholder="First name"
                type="text"
                className="firstName"
                id="firstName"
              />
              {isFirstEmpty && <p className="required">Required</p>}
              <label className="label" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                onBlur={this.isEmptyLastName}
                onChange={this.getLastName}
                value={lastName}
                placeholder="Last name"
                type="text"
                className="firstName"
                id="lastName"
              />
              {isLastEmpty && <p className="required">Required</p>}
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="successImage"
              />
              <p className="description">Submitted Successfully</p>
              <button
                className="button"
                onClick={this.getAnotherResponse}
                type="button"
              >
                Submit another Response
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
