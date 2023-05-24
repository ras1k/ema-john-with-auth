import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title text-center fw-bold'>Login</h2>
            <form className='p-2'>
                <div className=''>
                    <label htmlFor="">Email</label>
                    <input className='form-control' type="email" id='email' name='email' required />
                </div>
                <div className=''>
                    <label htmlFor="">Password</label>
                    <input className='form-control' type="password" id='password' name='password' required />
                </div>
                <input type="submit" value="Login" className='btn w-100 btn-outline-success mt-5 text-center' />

            </form>
        </div>
    );
};

export default Login;