import {useState} from 'react';
import Gear from '../img/gear.png';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = ({setLoginUser}) => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email:"",
        password: ""
    })

    const changeHandler = e =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
        }
    const login =()=>{
        axios.post("http://localhost:8000/builds/login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
        navigate('/');
        })
    }
    
    return(
    <div className='login-registration'>
        <div className='login-image-form-wrapper'>
                <h3 id='login-form-headers'>Thanks for being a member of our community!</h3>
                <h3 id='login-form-headers'>Login here</h3>
                <img id='login-image' src={Gear} alt="gear-icon"/>
            </div>
        <form className='login-registration-form'>
            <h1 id='login-heading-h1'>Login</h1>
        <div id='login-form-description'>
            <input name='email' value={user.email} onChange={changeHandler} id='login-inputs' type="text" placeholder="Enter email address" />
        </div>
        <div id='login-form-description'>
            <input name="password" value={user.password} onChange={changeHandler} id='login-inputs' type="password" placeholder="Enter Password" />
        </div>
        <button onClick={login} id='login-form-button' type="submit">Login</button>
        <Link to='/builds/registration'>Don't have an account? Register!</Link>
        </form>
    </div>
    )
};

    export default Login;