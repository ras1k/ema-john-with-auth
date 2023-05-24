import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        setError('')
        if (password !== confirm) {
            setError('Password Does Not Match');
            return;
        }
        else if (password.length <= 6) {
            setError('Password Must be 6 Characters or Longer');
            return;
        }

        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title text-center fw-bold'>Sign Up</h2>
            <form className='p-2' onSubmit={handleSignUp}>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <input className='form-control' type="email" id='email' name='email' required />
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" id='password' name='password' required />
                </div>
                <div className=''>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input className='form-control' type="password" id='confirm' name='confirm' required />
                </div>
                <input type="submit" value="Sign Up" className='btn w-100 btn-primary mt-5 text-center' />

            </form>
            <p className='text-center'><small>Already Have An Account? <Link to="/login">Login</Link></small></p>
            <p className='text-center text-danger'><small>{error}</small></p>
        </div>
    );
};

export default SignUp;