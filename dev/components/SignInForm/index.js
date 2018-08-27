import React, { Component } from 'react';
import style from './sign-in.scss';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
      }

    render() {
        const { email, password } = this.state;
        return (
            <form>
                <label>
                    Email
                    <input value={email} className={style.formInput} type="email" />
                </label>
                <label>
                    Password
                    <input value={password} className={style.formInput} type="password" />
                </label>
            </form>
        );
    }
}

export default SignInForm;
