
import { Button, Card, Form } from "react-bootstrap";
import React, { useRef, } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from "../../../firebase/mock";

import { Link } from "react-router-dom";
import { Container } from "./style";

export const Login = () => {



    const emailRef = useRef()
    const passwordRef = useRef()

    const auth = getAuth(app)



    const onLogin = () => {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(res => { console.log(res, 'success') })
            .catch(err => {
                console.log(err, 'errr');
            })
    }

    return (
        <>
            <Container>
                <div className='w-100 ' style={{ maxWidth: "400px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4 ">Log In </h2>


                            <Form >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>

                                <Button onClick={onLogin} style={{ marginTop: "20px" }} className="w-100  " type="submit">Log In</Button>


                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/home/registration/">
                            Sign Up
                        </Link>

                    </div>
                </div>

            </Container>

        </>
    )
}
export default Login

