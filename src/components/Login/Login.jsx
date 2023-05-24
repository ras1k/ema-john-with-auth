import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = () =>{
        signIn(email, password)
        .then(result=>{

        })
        .catch(error=>{
            console.error(error)
        })
    }
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
            <p className='text-center'><small>New To Ema John? <Link to="/signup">Sign Up</Link></small></p>
        </div>
    );
};

export default Login;