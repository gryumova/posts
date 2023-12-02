import React from "react";
import MyInput from "../UI/input/MyInput"
import MyButton from "../UI/button/MyButtton";

const SignUpForm = ({login}) => {
    return (
        <div className='signup'>
            <h3
                style={{color:"white"}}
            >
                Fill in all the fields:
            </h3>
            <form 
                className='signup_form' 
                onSubmit={login}
                style={{width:"400px"}}
            >
                <MyInput
                    type="text"
                    placeholder="First Name"
                    required
                />
                <MyInput
                    type="text"
                    placeholder="Last Name"
                    required
                />
                <MyInput
                    type="text"
                    placeholder="Email Address"
                    required
                />
                <MyButton>SignUp</MyButton>
            </form>
        </div>
    )
}

export default SignUpForm;