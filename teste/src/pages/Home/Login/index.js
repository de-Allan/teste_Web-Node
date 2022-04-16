import React from 'react';
import './login.css'



export default function Login() {
    return(
           <div className = "geral">
                <div className = "login-box">
                
                    <h1 className= "login-title"> ADMIN PANEL </h1> 
                

                
                        <form className='login-form'>
                           <div className='login-form'>

                                <div className="form-control-label">USERNAME</div>
                                <input type="text"/>

                            </div>

                            <div className="login-form">
                                
                                <div className="form-control-label"> PASSWORD</div>
                                <input type="password" />
                                
                            </div>

                            <div className="loginbttm ">
                               
                                <button type="submit" className=" btn-outline-primary">LOGIN</button>
                                
                            </div>
                        </form>
                </div>
                </div>
            
    );
}