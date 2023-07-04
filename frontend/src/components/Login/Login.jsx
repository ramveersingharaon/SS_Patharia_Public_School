import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { getCurrentUser, login } from '../../redux/actions/loginAction.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { clearError, clearMessage } from '../../redux/reducers/loginSlices';

const Login = () => {

    const { message, error } = useSelector(state => state.login)

    const dispatch = useDispatch()
    const initialState = {
        email: "",
        password: ""
    }
    const [loginData, setLoginData] = useState(initialState);

    const onchangeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const submitHandler = async () => {
        await dispatch(login({ ...loginData }))
        await dispatch(getCurrentUser)
        setLoginData(initialState)
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearError())
        }
        if (message) {
            toast.success(message)
            dispatch(clearMessage())
        }
    }, [message, error, dispatch])

    return (
        <div className='login'>
            <fieldset>
                <legend> Login Now</legend>
                <form>
                    <input type="email" placeholder='Enter Your Email' name='email' value={loginData.email} onChange={onchangeHandler} />
                    <input type="password" placeholder='Enter Your Password' name='password' value={loginData.password} onChange={onchangeHandler} />


                </form>
                <button className='btn' onClick={submitHandler} >Send</button>
            </fieldset>

        </div>
    )
}

export default Login
