
import { Button, Card, Form } from "react-bootstrap";
import React, { useRef, useState, } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { app } from "../../../firebase/mock";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Alert, Space, message } from "antd";


export const Login = () => {

    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const auth = getAuth( app )
    const [ user, setUser ] = useState( {} )
    onAuthStateChanged( auth, ( currentUser ) => {
        setUser( currentUser )
    } )



    const onLogin = ( e ) => {

        e.preventDefault()
        console.log( e );
        signInWithEmailAndPassword( auth, emailRef.current.value, passwordRef.current.value )
            .then( res => {
             
                console.log( res, 'success' )
                navigate( '/home' )
                message.success( "Login success" )

                localStorage.setItem( "token", emailRef.current.value )
            } )

            .catch( err => {
                console.log( err, 'errr' )
                message.error( "WARN!! Your email or password is not correct" )


            } )

    }

    const logout = ( e ) => {
        e.preventDefault()

        signOut( auth ).then( res => {
            console.log( res, 'success' )

            message.success( "You have SignedOut  succesfully" )

            localStorage.removeItem( "token", emailRef.current.value )
        } )

            .catch( ( err ) => {
                message.error( err.message, 'error' )


            } )

    }
    return (
        <>
            <Container>
                <div className='w-100 ' style={ { maxWidth: "400px" } }>
                    { user?.email }
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4 ">Log In </h2>


                            <Form >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={ emailRef } required autoComplete="on" />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={ passwordRef } required autoComplete="on" />
                                </Form.Group>

                                <Button onClick={ onLogin } style={ { marginTop: "20px" } } className="w-100  " type="submit">Log In</Button>


                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/home/registration/signup">
                            Sign Up
                        </Link>

                    </div>
                    <div className="w-100 text-center mt-2">
                        Do you want to <Link onClick={ logout } >
                            Sing Out ?
                        </Link>

                    </div>

                </div>

            </Container>

        </>
    )
}
export default Login

