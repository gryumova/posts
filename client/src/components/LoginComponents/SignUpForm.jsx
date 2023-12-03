import React from "react";
import MyInput from "../UI/input/MyInput"
import MyButton from "../UI/button/MyButtton";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { login } from "../../http/userApi";
import { observer } from "mobx-react-lite";

const SignUpForm = observer(() => {
    const {user} = useContext(Context)
    const router = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async (event) => {
        event.preventDefault()
        try {
            let data = await login(email, password);
            user.setUser(data)
            user.setIsAuth(true)
            router('/posts')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='signup'>
            <h3
                style={{color:"white"}}
            >
                Fill in all the fields:
            </h3>
            <form 
                className='signup_form' 
                style={{width:"400px"}}
            >
                <MyInput
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                />
                <MyInput
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <MyButton 
                    onClick={(e) => click(e)}
                >
                    SignUp
                </MyButton>
            </form>
        </div>
    )
})

export default SignUpForm;