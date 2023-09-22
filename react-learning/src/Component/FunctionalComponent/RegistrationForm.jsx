import React, { useState } from 'react';
import "./Login.css"

const RegistrationForm = () => {
    const [status, setStatus] = useState(true)
    return (
        <>
            {/* <div className="container"> */}
            <div className='body-auth'>
                <div className={(status) ? "container-auth sign-in" : "container-auth log-in"}>
                    <div className="box"></div>
                    <div className="container-auth-forms">
                        <div className="container-auth-info">
                            <div className="info-item">
                                <div className="table">
                                    <div className="table-cell">
                                        <p> 
                                            Have an account?
                                        </p>
                                        <div className="btn-auth" onClick={() => { console.log("called"); setStatus(true) }}>
                                            Log in
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="table">
                                    <div className="table-cell">
                                        <p>
                                            Don't have an account?
                                        </p>
                                        <p>{JSON.stringify(status)}</p>
                                        <div className="btn-auth" onClick={() => { console.log("called"); setStatus(false) }}>
                                            Sign up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-auth-form">
                            <div className="form-item log-in">
                                <div className="table">
                                    <div className="table-cell">
                                        <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                                        <div className="btn-auth">
                                            Log in
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-item sign-up">
                                <div className="table">
                                    <div className="table-cell">
                                        <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                                        <div className="btn-auth">
                                            Sign up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // </div>
    );
};

export default RegistrationForm;