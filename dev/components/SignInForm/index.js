import React, { Component } from 'react';
import style from './sign-in.scss';
import { login } from '../../actions/auth';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
      }

      handleSubmit = (e) => {
        e.preventDefault();
        login(this.state);
      }

      handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
      }


    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input onChange={this.handleChange} name="email" value={email} className={style.formInput} type="email" />
                </label>
                <label htmlFor="password">
                    Password
                    <input onChange={this.handleChange} name="password" value={password} className={style.formInput} type="password" />
                </label>
                <button type="submit">
                    Sign in
                </button>
            </form>
        );
    }
}

export default SignInForm;
