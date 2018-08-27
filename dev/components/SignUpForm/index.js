import React, { Component } from 'react';
import style from './sign-up.scss';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            surname: '',
        }
      }

    render() {
        return (
            <form className={style.signUpForm}>
                <label>
                    Email
                    <input className={style.formInput} type="email" />
                </label>
                <label>
                    Password
                    <input className={style.formInput} type="password" />
                </label>
                <label>
                    Name
                    <input className={style.formInput} type="text" />
                </label>
                <label>
                    Surname
                    <input className={style.formInput} type="text" />
                </label>
            </form>
        );
    }
}

export default SignUpForm;