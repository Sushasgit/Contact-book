import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm';
import SignInForm from '../../components/SignInForm';

import style from './autorisation.scss';

class AutorisationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'signUp',
        };
      }

      switchForm = (type) => {
        this.setState({ type });
      }

    render() {
        const { type } = this.state;
        return (
            <div className={style.authScreen}>
                <div className={style.formBox}>
                    <div className={style.buttonBox}>
                        <button
                          type="button"
                          className={`${style.switchButtons} ${type === 'signUp' ? style.active : ''}`}
                          onClick={() => { this.switchForm('signUp'); }}
                        >
                            Sign up
                        </button>
                        <button
                          type="button"
                          className={`${style.switchButtons} ${type === 'signIn' ? style.active : ''}`}
                          onClick={() => { this.switchForm('signIn'); }}
                        >
                            Sign in
                        </button>
                    </div>
                    {
                        type === 'signUp' && (
                        <SignUpForm />
                        )
                    }

                    {
                        type === 'signIn' && (
                        <SignInForm />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default AutorisationScreen;
