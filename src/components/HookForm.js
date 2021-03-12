import React, { useState } from 'react';

const HookForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log(`user with email: ${newUser.email} created`)

    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                    <form onSubmit={ createUser } className="form w-50">
                        <label>First Name:</label>
                        <input className="form-control" type="text" placeholder="First Name" onChange={ (e) => setFirstName(e.target.value)}/>
                        <label>Last Name:</label>
                        <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value)}/>
                        <label>Email:</label>
                        <input className="form-control" type="email" onChange={ (e) => setLastName(e.target.value)}/>
                        <label>Password:</label>
                        <input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value)}/>
                        <label>Confirm Password:</label>
                        <input className="form-control" type="password" onChange={ (e) => setConfirmPw(e.target.value)}/>
                    </form>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
            </div>
        </div>
    )
}


export default HookForm