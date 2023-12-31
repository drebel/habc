import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function SignupPage(){

    const [signupData, setSignupData] = React.useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    function handleChange(event){
        const {name , value} = event.target
        setSignupData(prevSignupData => {
            return {
                ...prevSignupData,
                [name]: value
            }
        })
    }

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        console.log('submit signup')

        const response = await axios.post('http://localhost:5000/signup', signupData)
        console.log(response)
        // navigate('/dashboard')
    }

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="userName">Username</label>
            <input 
            type="text" 
            id="userName"
            name="username" 
            placeholder="Username"
            value={signupData.username}
            onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
            />

            <label htmlFor="password">password</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleChange}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={handleChange}
            />

            <button>Signup</button>
        </form>
    )
}