import React, { useState } from 'react';

const HookForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameErr, setFnErr] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameErr, setLnErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPwErr] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [confirmPwErr, setConfirmPwErr] = useState("");
    
    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log(`user with email: ${newUser.email} created`)

    }

    const handleInput = (e, inputName, minLen, setFunction) => {
        setFunction(e.target.value);
        let message = ""
        if (e.target.value.length < minLen) {
            message = `${inputName} must be at least ${minLen} characters in length!`;
        } else {
            message = "";
        }
        if (inputName == "First Name") {
            setFnErr(message);
        } else if (inputName == "Last Name") {
            setLnErr(message);
        } else if (inputName == "Email") {
            setEmailErr(message);
        } else if (inputName == "Password") {
            setPwErr(message)
        }
    }

    const handleConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if (e.target.value !== password) {  // did not work with confirmPw in the condition
            setConfirmPwErr("Passwords must match")
        } else {
            setConfirmPwErr("");
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                    <form onSubmit={ createUser } className="form w-50">
                        <label>First Name:</label>
                        <input className="form-control" type="text" placeholder="First Name" onChange={ (e) => { handleInput(e, "First Name", 2, setFirstName)}}/>
                        { 
                            firstNameErr ?
                                <p className="text-danger form-control">{ firstNameErr }</p> :
                                <p className="text-danger form-control">  </p>
                        }
                        <label>Last Name:</label>
                        <input className="form-control" type="text" onChange={ (e) => { handleInput(e, "Last Name", 2, setLastName)}}/>
                        { 
                            lastNameErr ?
                                <p className="text-danger form-control">{ lastNameErr }</p> :
                                <p className="text-danger form-control">  </p>
                        }
                        <label>Email:</label>
                        <input className="form-control" type="email" onChange={ (e) => { handleInput(e, "Email", 5, setEmail)}}/>
                        { 
                            emailErr ?
                                <p className="text-danger form-control">{ emailErr }</p> :
                                <p className="text-danger form-control">  </p>
                        }
                        <label>Password:</label>
                        <input className="form-control" type="password" onChange={ (e) => { handleInput(e, "Password", 8, setPassword)}}/>
                        { 
                            passwordErr ?
                                <p className="text-danger form-control">{ passwordErr }</p> :
                                <p className="text-danger form-control">  </p>
                        }
                        <label>Confirm Password:</label>
                        <input className="form-control" type="password" onChange={handleConfirmPw} value={confirmPw}/>
                        { 
                            confirmPwErr ?
                                <p className="text-danger form-control">{ confirmPwErr }</p> :
                                <p className="text-danger form-control">  </p>
                        }
                    </form>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPw}</p>
            </div>
        </div>
    )
}


export default HookForm