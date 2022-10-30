import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setFirstNameError("First Name is required!");
    //     } else if(e.target.value.length < 2) {
    //         setFirstNameError("First Name must be at least 2 characters");
    //     } else {
    //         setFirstNameError("");
    //     }
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setLastNameError("Last Name is required!");
    //     } else if(e.target.value.length < 2) {
    //         setLastNameError("Last Name must be at least 2 characters");
    //     } else {
    //         setLastNameError("");
    //     }
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setEmailError("Email is required!");
    //     } else if(e.target.value.length < 5) {
    //         setEmailError("Email must be at least 5 characters");
    //     } else {
    //         setEmailError("");
    //     }
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setPasswordError("Password is required!");
    //     } else if(e.target.value.length < 8) {
    //         setPasswordError("Password must be at least 8 characters");
    //     } else {
    //         setPasswordError("");
    //     }
    //     if(e.target.value !== conPassword) {
    //         setPasswordError("Passwords dont't match");
    //     } else {
    //         setPasswordError("");
    //     }
    // }

    // const handleConPassword = (e) => {
    //     setConPassword(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setConPasswordError("Confirm Password is required!");
    //     } else if(e.target.value !== password) {
    //         setConPasswordError("Passwords don't match");
    //     } else {
    //         setConPasswordError("");
    //     }
    // }

    const handleError = (e) => {
        //First Name
        if(e.target.name === "firstName") {
            setFirstName(e.target.value);
            if(e.target.value.length < 1) {
                setFirstNameError("First Name is required!");
            } else if(e.target.value.length < 2) {
                setFirstNameError("First Name must be at least 2 characters");
            } else {
                setFirstNameError("");
            }
        }
        // Last Name
        if(e.target.name === "lastName") {
            setLastName(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError("Last Name is required!");
            } else if(e.target.value.length < 2) {
                setLastNameError("Last Name must be at least 2 characters");
            } else {
                setLastNameError("");
            }
        }
        // Email
        if(e.target.name === "email") {
            setEmail(e.target.value);
            if(e.target.value.length < 1) {
                setEmailError("Email is required!");
            } else if(e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters");
            } else {
                setEmailError("");
            }
        }
        // Password
        if(e.target.name === "password") {
            setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required!");
            } else if(e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters");
            } else {
                setPasswordError("");
            }
            if(e.target.value !== conPassword) {
                setConPasswordError("Passwords don't match");
            } else {
                setConPasswordError("");
            }
        }
        // Confirm Password
        if(e.target.name === "conPassword") {
            setConPassword(e.target.value);
            if(e.target.value.length < 1) {
                setConPasswordError("Confirm Password is required!");
            } else if(e.target.value !== password) {
                setConPasswordError("Passwords don't match");
            } else {
                setConPasswordError("");
            }
        }
    }



    return (
        <div className='container'>
            <form className='col-6 offset-3'>
                <div>
                    <label>First name: </label>
                    <input type="text" name='firstName' className='form-control' onChange={handleError}/>
                    <p>
                        {
                            firstNameError ?
                            <p style={{color:'red'}}>{ firstNameError }</p> :
                            ''
                        }
                    </p>
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" name='lastName' className='form-control' onChange={handleError}/>
                    <p>
                        {
                            lastNameError ?
                            <p style={{color:'red'}}>{ lastNameError }</p> :
                            ''
                        }
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name='email' className='form-control' onChange={handleError}/>
                    <p>
                        {
                            emailError ?
                            <p style={{color:'red'}}>{ emailError }</p> :
                            ''
                        }
                    </p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name='password' className='form-control' onChange={handleError}/>
                    <p>
                        {
                            passwordError ?
                            <p style={{color:'red'}}>{ passwordError }</p> :
                            ''
                        }
                    </p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name='conPassword' className='form-control' onChange={handleError}/>
                    <p>
                        {
                            conPasswordError ?
                            <p style={{color:'red'}}>{ conPasswordError }</p> :
                            ''
                        }
                    </p>
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