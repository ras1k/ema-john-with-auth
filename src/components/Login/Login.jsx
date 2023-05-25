import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleSignIn = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title text-center fw-bold'>Login</h2>
            <form className='p-2' onSubmit={handleSignIn}>
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