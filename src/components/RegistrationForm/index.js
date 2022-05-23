import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isLoggedIn: false,
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    firstNameInput: '',
    lastNameInput: '',
  }

  onLastNameInputChange = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onFirstNameInputChange = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onLogin = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({
        isLoggedIn: true,
        firstNameInput: '',
        lastNameInput: '',
        isFirstNameEmpty: false,
        isLastNameEmpty: false,
      })
    } else {
      this.onFirstNameChange()
      this.onLastNameChange()
    }
  }

  onFirstNameChange = () => {
    const {firstNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  onLastNameChange = () => {
    const {lastNameInput} = this.state
    if (lastNameInput === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  renderForm = () => {
    const {
      isFirstNameEmpty,
      isLastNameEmpty,
      firstNameInput,
      lastNameInput,
    } = this.state
    const emptyFirstNameClassName = isFirstNameEmpty ? 'empty' : ''
    const emptyLastNameClassName = isLastNameEmpty ? 'empty' : ''
    return (
      <form className="card" onSubmit={this.onLogin}>
        <div className="first-name-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            onBlur={this.onFirstNameChange}
            className={`input ${emptyFirstNameClassName}`}
            value={firstNameInput}
            onChange={this.onFirstNameInputChange}
          />
          {isFirstNameEmpty ? <p className="required">Required</p> : ''}
        </div>
        <div className="last-name-container">
          <label htmlFor="lastName">LAST NAME</label>
          <br />
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            onBlur={this.onLastNameChange}
            className={`input ${emptyLastNameClassName}`}
            value={lastNameInput}
            onChange={this.onLastNameInputChange}
          />
          {isLastNameEmpty ? <p className="required">Required</p> : ''}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }

  openLoginPage = () => {
    this.setState({
      isLoggedIn: false,
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
    })
  }

  successPage = () => (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submitted">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-btn"
        onClick={this.openLoginPage}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isLoggedIn ? this.successPage() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
