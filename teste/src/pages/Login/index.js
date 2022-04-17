import React, { useEffect, useState } from 'react';
import users from '../../users/users';
import './login.css'

export default function Login() {
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Logged, setLogged] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {

        setLogged(false)
        let usuario = users.filter(user => {return user.email === Email} )

        usuario.forEach(user => {
            if (user.email === Email) {
                if (user.senha === Password) {
                    setLogged(true)
                    setUser(user)
                    return;

                } else {
                    setLogged(false)
                    return;
                }
            } else {
                setLogged(false)
                return;
            }
        })


    }, [Email, Password ])

    return (
        <div className="login-box">

            <div className="login-title"> ADMIN PANEL </div>
            <form className='login-form'>

                <div>
                    <div className="form-control-label">USERNAME</div>
                    <input
                        type='email'
                        value={Email}
                        onChange={email => setEmail(email.target.value)}
                    />
                </div>

                <div className="login-form">
                    <div className="form-control-label"> PASSWORD</div>
                    <input
                        type="password"
                        value={Password}
                        onChange={password => setPassword(password.target.value)}
                    />
                </div>

                <div className="loginbttm ">
                    <button
                        className=" btn-outline-primary" >
                        LOGIN
                    </button>
                </div>
            </form>
            
            {
                Logged === true ?
                    <small>Logou como {user.Nome}</small>
                    :
                    <small>Não Logou</small>
            }

        </div>
    );
}