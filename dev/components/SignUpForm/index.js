import React, { Component } from 'react';
import { register } from '../../actions/auth';
import style from './sign-up.scss';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            surname: '',
        };
      }

      handleSubmit = (e) => {
        e.preventDefault();
        register(this.state);
      }

      handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={style.signUpForm}>
                    <label htmlFor="email">
                        Email
                        <input
                          onChange={this.handleChange}
                          name="email"
                          className={style.formInput}
                          type="email"
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                          onChange={this.handleChange}
                          name="password"
                          className={style.formInput}
                          type="password"
                        />
                    </label>
                    <label htmlFor="name">
                        Name
                        <input
                          onChange={this.handleChange}
                          name="name"
                          className={style.formInput}
                          type="text"
                        />
                    </label>
                    <label htmlFor="surname">
                        Surname
                        <input
                          onChange={this.handleChange}
                          name="surname"
                          className={style.formInput}
                          type="text"
                        />
                    </label>
                </div>
                <button
                  type="submit"
                  className={style.signUpbtn}
                >
                    Sign up
                </button>
            </form>
        );
    }
}

export default SignUpForm;
