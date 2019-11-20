import React, { useState } from 'react';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
    const [error, setError] = useState('')

    const submit = e => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setError("Passwords do not match!");
        } else if (!name) {
            setError("Name must be provided.");
        } else {
            // Back-End Stuff??
        }
    };

    return (
        <form onSubmit = {(e) => submit(e)}>
            <input 
                name = "name"
                type = "text"
                value = {name}
                required
                placeholder = "Name"
                onChange = {(e) => setName(e.target.value)} />
            {error ? <span>{error}</span> : null}
            <input 
                name = "email"
                type = "email"
                value = {email}
                required
                placeholder = "Email"
                onChange = {(e) => setEmail(e.target.value)} />
            <input 
                name = "address"
                type = "text"
                value = {address}
                required
                placeholder = "Your Address"
                onChange = {(e) => setAddress(e.target.value)} />
            <input 
                name = "password"
                type = "password"
                value = {password}
                required
                placeholder = "Password"
                onChange = {(e) => setPassword(e.target.value)} />
            {error ? <span>{error}</span> : null}
           <input 
                name = "passwordConfirm"
                type = "password"
                value = {passwordConfirm}
                required
                placeholder = "Confirm your password"
                onChange = {(e) => setPasswordConfirm(e.target.value)} />
            {error ? <span>{error}</span> : null}
            <button type = "button">Submit</button>
        </form>
    );
};

export default Register