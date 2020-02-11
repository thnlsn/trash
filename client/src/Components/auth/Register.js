import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import AlertContext from '../../context/alert/alertContext';

const Register = props => {
    const userContext = useContext(UserContext);
    const { register, error, clearErrors, isAuthenticated } = userContext;

    const alertContext = useContext(AlertContext);
    const { setAlert /* removeAlert */ } = alertContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/dashboard');
        }

        if (error === 'User already exists') {
            // setting the error value in state
            setAlert(error, 'danger'); // calling set alert with the previously set error value
            clearErrors(); // setting error value back to null
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        zip: '',
        password: '',
        password2: ''
    });

    const { name, email, zip, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        // I want to add an else/if here to remove alert if one exists already

        if (name === '' || email === '' || password === '' || zip === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else if (password.length < 6) {
            setAlert('Password must contain at least 6 characters', 'danger');
        } else {
            register({
                name,
                email,
                zip,
                password,
                password2
            });
            props.history.push("/");
        }
    };

    return (
        <div className='register-container'>
            <h1 className='register-title'>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group register-form'>
                    <label htmlFor='name'>First Name:</label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group register-form'>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group register-form'>
                    <label htmlFor='zip'>Zip Code</label>
                    <input
                        className='form-control'
                        type='text'
                        name='zip'
                        value={zip}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group register-form'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />{' '}
                </div>
                <div className='form-group register-form'>
                    <label htmlFor='password2'>Confirm Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                
              <input
                    type='submit'
                    value='Register'
                    className='btn register-button'
                />
          
                
            </form>
        </div>
    );
};

export default Register;