import React from 'react';
import logo from '../../Images/Logos/logo white bg.png';
import './Login.css';
import loginImg from '../../Images/login.png';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Login =(props) => {
    return (
        <div>
        <Navigation/>
        <div className ="_container-custom container p-5">
            <div className="row shadow">

                <div className="col-md-6 p-0 container-image">
                    <img className = "img-fluid _img-login d-block" src={loginImg}/>
                    <div className = 'text-below-image text-center'>
                        <p className ="mb-5">Let's get started</p>
                        <p>Skyrocket your career with best global opportunities</p>
                    </div>
                </div>
        
                <div className ="col-md-6  _container-form ">
                    <div className = "my-4">
                        <img className = "img-fluid _img mx-auto d-block" src={logo}/>
                    </div>
                    <form>
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-envelope-o fa-fw"></i></span>
                            </div>
                            <input type="text" id= "email" className = "form-control" placeholder = "Email" />
                        </div> 
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                            </div>
                            <input type ="password" id ="pass" className = "form-control" placeholder = "Password" required/>
                        </div>
                        <div className = "text-center mb-3 mt-3">
                            <button type="submit" className = "btn btn-success px-3 py-2"><b>Log in</b></button>
                        </div>
                        <div className="_or-seperator"><i className ="text-dark">or log in with</i></div>
                        <div className="mb-4">
                            <button className="btn btn-primary mx-auto btn-block"><i className="fa fa-linkedin mr-3"></i><b>Linked-in</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}


export default Login;










