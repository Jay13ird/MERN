import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }/>
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName }/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConPassword(e.target.value) } value={conPassword}/>
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {conPassword}</p>
            </div>
        </div>
    );
}

export default Form