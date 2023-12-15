import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function LoginPage(){

    const [loginData, setLoginData] = React.useState({
        email:'',
        password:'',
    })

    function handleChange(event){
        const {name , value} = event.target
        setLoginData(prevSignupData => {
            return {
                ...prevSignupData,
                [name]: value
            }
        })
    }

    // const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        console.log('submit signup')
        const response = await axios.post('http://localhost:5000/login', loginData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })
        console.log(response)
        // navigate('/dashboard')
    }

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            />

            <label htmlFor="password">password</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            />

            <button>Login</button>
        </form>
    )
}