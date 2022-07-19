import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    return (
        <div className="d-flex justify-content-center ">
            <div className="form-image d-none d-md-block">
                <img src="https://picsum.photos/800/800" alt="sample-logo" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register" onSubmit={handleSubmit}>
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
                    <div className="link">Forgot Password</div>
                    <div className="mb-3">
                        <input
                            type="submit"
                            className="btn btn-primary form-control"
                            value="Login"
                        />
                    </div>
                </form>
                <button className="btn btn-primary form-control">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
