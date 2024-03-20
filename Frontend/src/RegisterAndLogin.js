import React, { useState } from 'react'
import { database } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegisterAndLogin = () => {
    const [login, setLogin] = useState(false)

    const history = useNavigate()
    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === 'signup') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "auth");
                history('./home')
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "auth");
                history('./home')
            }).catch(err => {
                alert(err.code)
            })
        }
    }

    return (
        <div className='App'>
            <div className='row'>
                <div className={login == false ? "activeColor" : "pointer"}
                    onClick={() => setLogin(false)}>SignUp</div>
                <div className={login == true ? "activeColor" : "pointer"}
                    onClick={() => setLogin(true)}>SignIn</div>
            </div>
            <h1>{login ? 'SingIn' : 'SignUp'}</h1>
            <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
                <input type='text' name='email' placeholder='Please enter email' /><br />
                <input type='password' name='password' placeholder='please enter password' /><br />
                <button>{login ? 'SingIn' : 'SignUp'}</button>
            </form>
        </div>
    )
}

export default RegisterAndLogin
