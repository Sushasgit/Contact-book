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
        const { type } = this.state
        return (
            <div>
                <button className={style.switchButtons} onClick={()=>{this.switchForm('signUp')}}>
                    Sign up
                </button>
                <button className={style.switchButtons} onClick={()=>{this.switchForm('signIn')}}>
                    Sign in
                </button>
                {
                    type === 'signUp' &&
                    <SignUpForm />
                }

                 {
                    type === 'signIn' &&
                    <SignInForm />
                }
            </div>
        );
    }
}

export default AutorisationScreen;