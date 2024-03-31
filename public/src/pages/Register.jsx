import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.svg";


function Register(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    }

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return <>
        <FormContainer>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="brand">
                    <img src="{Logo}" alt="logo" />
                    <h1>HKTChat</h1>
                </div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword" 
                    onChange={(e)=>handleChange(e)}
                />
                <button type="submit">Create User</button>
                <span>
                    Already have an account ? <Link to="/login">Login.</Link>
                </span>
            </form>
        </FormContainer>
</>
}

const FormContainer = styled.div``;

export default Register;