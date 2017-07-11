import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
      password2: '',
      valid: true
    }

  }
  doSomethingWithEmail(event) {
    // event.preventDefault()
    this.setState({
      email: event.target.value
    })

  }
  passwordHandler(event){
    // event.preventDefault()
    this.setState({
      password: event.target.value
    })
  }
  passwordConfirmHandler(event){
    // event.preventDefault()
    this.setState({
      password2: event.target.value
    })
  }
  passwordCheck(){
    if(this.state.password === this.state.password2 ){
      this.setState({valid: true})
      return true
      // console.log(this.state.valid)
    } else{
      this.setState({valid: false})
      return false
    }
  }
  validCheck(event){
    event.preventDefault()
    this.passwordCheck()

    console.log(this.state.valid)
  }


  render() {
      //without out this line it takes 2 clicks to print a change
      let output = (this.state.valid && this.state.email.includes('@')) ? " " : "Username/Password incorrect"
    return (
      <div className="form" >
        <h1>Sign Up</h1>
        <input onChange={(e) => this.doSomethingWithEmail(e) } type="email"  placeholder="email@email.com" />
        <input onChange={(e) => this.passwordHandler(e) } type="password" placeholder="password"  />
        <input onChange={(e) => this.passwordConfirmHandler(e) } type="password" placeholder="confirm password"  />
        <input type="submit" value="Submit" onClick={(e) => this.validCheck(e)} />

        <h1>{output}</h1>
      </div>
    );
  }
}

export default Validator;
