import React, { Component } from 'react';
// import style from './sign-in.scss';
import { getContacts, setContact } from '../../actions/auth';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            position: '',
            bornDate: '',
            image: '',
            category: '',
            email: '',
        };
      }

    componentWillMount() {
        getContacts();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        setContact('http://phonebook.hillel.it/api/phonebook', this.state);

        console.log(setContact('http://phonebook.hillel.it/api/phonebook', this.state))
      }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        // const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="position" type="text" />
                <input onChange={this.handleChange} name="name" type="text" />
                <input onChange={this.handleChange} name="phone" type="text" />
                <input onChange={this.handleChange} name="bornDate" type="text" />
                <input onChange={this.handleChange} name="image" type="text" />
                <input onChange={this.handleChange} name="category" type="text" />
                <input onChange={this.handleChange} name="email" type="email" />
                <button type="submit">
                    Save
                </button>
            </form>
        );
    }
}

export default Book;
