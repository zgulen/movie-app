import React from "react";
import { useState } from "react";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password, navigate);
    };
    return (
        <div className="d-flex justify-content-center ">
            <div className="form-image d-none d-md-block">
                <img src="https://picsum.photos/800/800" alt="sample-logo" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter Your First Name"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Enter Your Last Name"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email address"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="submit"
                            className="btn btn-primary form-control"
                            value="Register"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
