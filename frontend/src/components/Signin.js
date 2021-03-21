import React from 'react';
import apiClient from '../services/api';

const Signin = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password_confirmation, setPasswordConf] = React.useState('');
    const handleSubmit = (e) => {
        console.log(name, email, password, password_confirmation)
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }).then(response => {
                console.log('response', response)
                localStorage.setItem('token', response.config.headers['X-XSRF-TOKEN']);
                localStorage.setItem('loggedIn', true);
            }).catch(error => console.log('error', error))
        });    
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="string"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    value={password_confirmation}
                    onChange={e => setPasswordConf(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>  
            </form>
        </div>
    );
}

export default Signin;