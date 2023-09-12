import React, { useState } from 'react';

const FormValidation = () => {
    const [inp, setInp] = useState("")

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const loginHandle = (e) => {
        if (user.length < 3 || pass.length < 3) {
            alert("your data is invalid")
        } else {
            alert("your data is submited")
        }
        e.preventDefault()
        // console.log("called");
    }

    const userData = (e) => {
        let input = e.target.value

        if (input.length < 3) {
            setInp(true)
        } else {
            setInp(false)
        }

        setUser(input)
    }
    const passwordData = (e) => {
        let input = e.target.value

        if (input.length < 3) {
            setInp(true)
        } else {
            setInp(false)
        }
        setPass(input)

    }


    return (
        <div>
            <h2>validation form</h2>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder='enter your username' onChange={userData} />{inp ? "user not valid" : ""}<br /><br />
                <input type="password" placeholder='enter your password' onChange={passwordData} />{inp ? "user not valid" : ""}<br /><br />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default FormValidation;