import React from 'react'

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

    function handleSubmit(event){
        event.preventDefault()
        console.log(loginData)
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