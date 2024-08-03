import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../../context/UserContext'
<link href=
"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" 
          rel="stylesheet"></link>
function Login() {
     const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        // setUsername(e.target.value)
        // setPassword(e.target.value)
        console.log(username)
        console.log(password)
        
    }
    const handleCancel = (e)=>{
        e.preventDefault()
        setUsername("")
        setPassword("")
    }

  return (
    < >
    <head>    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    </head>
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
</div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">UserName</label>
                <div className="mt-2">
                <input 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
        <div>
        <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required 
            className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
        <div>
            <button 
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md bg-indigo-600 p-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
    </div>
    
    </div>
    
    
</>
  )
}

export default Login