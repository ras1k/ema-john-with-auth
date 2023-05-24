import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title text-center fw-bold'>Login</h2>
            <form className='p-2'>
                <div className=''>
                    <label htmlFor="">Name</label>
                    <input className='form-control' type="text" id='name' name='name' required />
                </div>
                <div className=''>
                    <label htmlFor="">Email</label>
                    <input className='form-control' type="email" id='email' name='email' required />
                </div>
                <div className=''>
                    <label htmlFor="">Password</label>
                    <input className='form-control' type="password" id='password' name='password' required />
                </div>
                <div className=''>
                    <label htmlFor="">Confirm Password</label>
                    <input className='form-control' type="password" id='confirm' name='confirm' required />
                </div>
                <input type="submit" value="Sign Up" className='btn w-100 btn-outline-warning mt-5 text-center' />

            </form>
        </div>
    );
};

export default SignUp;