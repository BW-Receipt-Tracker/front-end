import React, {useContext} from 'react'
import axios from 'axios'

import { CredentialContext } from '../contexts/CredentialContext'

const Register = props => {
    const { registrationCredentials, setRegistrationCredentials } = useContext(CredentialContext)

    const handleChanges = e => {
        setRegistrationCredentials({...registrationCredentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post('http://project-receipt-tracker.herokuapp.com/createnewuser', registrationCredentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/login')
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input  
                    type='text'
                    name='primaryemail'
                    placeholder='email'
                    onChange={handleChanges}
                />
                <input  
                    type='text'
                    name='username'
                    placeholder='username'
                    onChange={handleChanges}
                />
                <input  
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChanges}
                />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register