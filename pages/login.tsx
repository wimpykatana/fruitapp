import TextInput from "../components/textInput"
import Button from "../components/button"
import Router from 'next/router'
import { useState } from "react"
import { useCookies } from 'react-cookie';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [cookies, setCookies] = useCookies(['islogin', 'username'])

    const btnClick = () => {
        // console.log(`Login with: ${username} - ${password}`)

        if(['user','user2'].includes(username)){
            
            if( username === 'user' && password === 'test1234'){
                console.log('user is login')
                setCookies('islogin', 'true')
                setCookies('username', username)
                Router.push('/')
                return
            }

            if(username === 'user2' && password === 'pass1234'){
                console.log('user2 is login')
                setCookies('islogin', 'true')
                setCookies('username', username)
                Router.push('/')
                return
            }
            setMessage("Login Failed")
            return
        }
        setMessage("Login Failed")
    }


    const inputUserName = (val:string) => {
        // console.log(val)
        setMessage('')
        setUsername(val)
    }
    const inputPassword = (val:string) => {
        // console.log(val)
        setMessage('')
        setPassword(val)
    }
   

    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-[300px] h-[250px] border flex flex-col items-center justify-center  p-5">
                <TextInput 
                    type="text"
                    inputValueFunction = {inputUserName}
                    placeHolder="Input your username" />
                <TextInput 
                    type="password"
                    inputValueFunction = {inputPassword}
                    placeHolder="Input your password" />
                <Button value="SUBMIT" onClickFunction={btnClick} />
                {message}
            </div>
        </div>
    )
}

export default Login