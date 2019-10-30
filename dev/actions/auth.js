import axios from 'axios';
import { history } from '../history';
// import Cookies from 'universal-cookie';

axios.defaults.withCredentials = true;


// const cookies = new Cookies();
const BASE_URL = 'http://phonebook.hillel.it';
const BASE_API_URL = BASE_URL + "/api/";

const getCookie = (name) => {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

const setCookie = (name, value, props) => {

    props = props || {}
  
    let exp = props.expires
  
    if (typeof exp == "number" && exp) {
  
        var d = new Date()
  
        d.setTime(d.getTime() + exp*1000)
  
        exp = props.expires = d
  
    }
  
    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
  
    value = encodeURIComponent(value)
  
    var updatedCookie = name + "=" + value
  
    for(var propName in props){
  
        updatedCookie += "; " + propName
  
        var propValue = props[propName]
  
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
  
    document.cookie = updatedCookie
  
  }

export const register = (data) => {
    axios.post(`${BASE_API_URL}users/register`, data, {
        headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then((res) => {
        console.log('res', res);
    });
};

export const login = (data) => {
    axios.post(`${BASE_API_URL}users/login`, data, {
        headers: {
        'Content-Type': 'application/json',
      },
    //   mode: 'no-cors',
      withCredentials: true,
    })
    .then((res) => {
        const cookiesValue = res.data.cookie;
        console.log('Value', cookiesValue.value);
        console.log(`${cookiesValue.name}=${cookiesValue.value};domain=${BASE_URL};path=/`);
        // cookies.set('sessionId', cookiesValue.value, { path: '/' });
        // setCookie('sessionId', cookiesValue.value);
        window.document.cookie = `${cookiesValue.name}=${cookiesValue.value};domain=${BASE_URL};path=/`;
        console.log('res-Login', res);
        setCookie(res.data.cookie.name, res.data.cookie.value);
        history.push('/book');
    });
};

export const getContacts = () => {
    axios.get(`${BASE_API_URL}phonebook`, {
        headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    //   origin: 'http://localhost:8081',
    //   credentials: 'same-origin',
    })
    .then((res) => {
        console.log(res);
    });
};

export const setContact = () => {
    const data = {
        name: `User_${Math.random()
            .toString(36)
            .substring(7)}`,
        surname: 'Test',
    };
    getCookie('sessionId');
    console.log(getCookie('sessionId'));

    // axios(`${BASE_API_URL}phonebook`, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     withCredentials: true,
    //     data,
    //   })
    //   .then((response) => {
    //     console.log(response);
    // })
    // .catch(console.error);

    fetch(`${BASE_API_URL}phonebook`, {
              credentials: 'include', // 'include', default: 'omit'
              method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            })
            .then(response => response.json());
    axios.get(`${BASE_API_URL}users/profile`, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
        });
};

// export const setContact = (url, data) => {
//     console.log(url, data)
//     return fetch(url, {
//       credentials: 'include', // 'include', default: 'omit'
//       method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//       body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     })
//     .then(response => response.json())
//   };

//   setContact(`${BASE_URL}phonebook`, data)
//   .then(data => console.log(data)) // Result from the `response.json()` call
//   .catch(error => console.error(error));
