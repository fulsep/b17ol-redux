import React, { Component } from 'react'
import { Alert, Button, Form, Input, Label } from 'reactstrap'
import {connect} from 'react-redux'
import auth from '../redux/actions/auth'

class Login extends Component {
  state ={
    email: '',
    password: '',
  }
  login = (e)=>{
    e.preventDefault()
    const {email, password} = this.state
    const data = {
      email,
      password
    }
    this.props.login(data)
    this.props.history.push('/')
  }
  onChangeText = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
  render() {
    const {isError, alertMsg} = this.props.auth
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div style={{width: 400}}>
          <Alert color={isError?'danger':'success'} isOpen={isError || alertMsg!==''}>{alertMsg}</Alert>
          <Form onSubmit={this.login}>
            <Label for='email'>Email</Label>
            <Input autoComplete='off' onChange={this.onChangeText} name='email' type='email' id='email' />
            <Label for='email'>Password</Label>
            <Input onChange={this.onChangeText} name='password' type='password' id='password' />
            <Button type='submit' className='mt-2' block color='primary'>Login</Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth})

const mapDispatchToProps = {
  login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)