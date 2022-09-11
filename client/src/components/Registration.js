import {useState} from 'react';
import Gear from '../img/gear.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState([
        {fullName:""},
        {email:""},
        {password: ""},
        {confirmPassword: ""},
    ])

    const changeHandler = (e) => {
        e.preventDefault();
    const {name, value} = e.target
    setUser({...user, [name]:value})
    }

    const registerHandler = () => {
    const {name, email, password, confirmPassword} = user;
    if (name && email && password && confirmPassword){
    axios.post("http://localhost:8000/api/builds/registration", user)
    .then(res=>console.log(res))
    navigate('/');
    }
    else {
        alert("invalid input")
    };
};

    return(
        <div className='login-registration'>
            <div className='login-image-form-wrapper'>
                <h3 id='login-form-headers'>Welcome to the PC community!</h3>
                <h3 id='login-form-headers'>Register your account with us here</h3>
                <img id='login-image' src={Gear} alt="gear-icon"/>
            </div>
    <form className='login-registration-form'>
        <h1 id='login-heading-h1'>Register</h1>
        <div id='login-form-description'>
            <input onChange={changeHandler} name="fullName" value={user.fullName} id='login-inputs' type="text" placeholder="Enter first and last name" />
        </div>
        <div id='login-form-description'>
            <input onChange={changeHandler} name="email" value={user.email} id='login-inputs' type="text" placeholder="Enter email address" />
            <small id='small'>We'll never share your email with anyone</small>
        </div>
        <div id='login-form-description-passwords'>
            <input onChange={changeHandler} name="password" value={user.password}  id='login-inputs' type="password" placeholder="Enter Password" />
            <input onChange={changeHandler} name="confirmPassword" value={user.confirmPassword}  id='login-inputs' type="password" placeholder="Confirm Password" />
        </div>
        <button onClick={registerHandler} id='login-form-button' type="submit">Register</button>
        <Link to='/builds/login'>Already have an account? Login!</Link>
    </form>
    </div>
    )
};

    export default Registration;