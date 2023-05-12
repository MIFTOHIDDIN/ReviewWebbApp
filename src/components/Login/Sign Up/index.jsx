
import { Button, Card, Form } from "react-bootstrap";
import React, { useEffect, useRef, useState, } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { app } from "../../../firebase/mock";
import { Icon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Sign In/style";
import { getDatabase } from "firebase/database";
import { Alert, message } from "antd";


export const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const auth = getAuth( app )


    const googleAuth = new GoogleAuthProvider();
    const githubAuth = new GithubAuthProvider();


    const onRegister = ( e ) => {
        e.preventDefault()
        createUserWithEmailAndPassword( auth, emailRef.current.value, passwordRef.current.value )
            .then( res => {
                console.log( res, 'success' )
                navigate( '/home' )
                message.success( "You have Signed Up Successfully!" )
                localStorage.setItem( "token", emailRef.current.value )
            } )
            .catch( err => {
                console.log( err, 'errr' )
                message.error( "WARN!!! You have something wrong for SignUp,try again" )

            } )

    }


    const onGoogle = () => {
        signInWithPopup( auth, googleAuth ).then( ( result ) => {
            console.log( result )
            navigate( '/home' )
            message.success( "You have Signed Up Successfully!" )
            localStorage.setItem( "token", emailRef.current.value )
            localStorage.setItem( "token", emailRef.current.value )

            const credential = GoogleAuthProvider.credentialFromResult( result );
            const token = credential.accessToken;

            const user = result.user;


        } ).catch( ( error ) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;
            message.error( "WARN!!! You have something wrong for SignUp,try again" )


            const credential = GoogleAuthProvider.credentialFromError( error );

        } );
    }
    const onGithub = () => {

        signInWithPopup( auth, githubAuth )

            .then( ( result ) => {

                const credential = GithubAuthProvider.credentialFromResult( result );
                const token = credential.accessToken;
                navigate( '/home' )
                message.success( "You have Signed Up Successfully!" )
                localStorage.setItem( "token", emailRef.current.value )


                const user = result.user;


            } ).catch( ( error ) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GithubAuthProvider.credentialFromError( error );
                message.error( "WARN!!! You have something wrong for SignUp,try again" )


            } );
    }
    return (
        <>
            <Container>
                <div className='w-100 ' style={ { maxWidth: "400px" } }>
                    <Card>

                        <Card.Body>
                            <h2 className="text-center mb-4 ">
                                Sign Up </h2>


                            <Form >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={ emailRef } required autoComplete="on" />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={ passwordRef } required autoComplete="on" />
                                </Form.Group>
                                {/* <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={ passwordConfirmRef } required />
                        </Form.Group> */}
                                <Button onClick={ onRegister } style={ { marginTop: "20px" } } className="w-100  " type="submit">Sign Up</Button>
                                <Icon>

                                    <Icon.Google onClick={ onGoogle } />
                                    <Icon.Github onClick={ onGithub } />
                                </Icon>

                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account?
                        <Link to="/home/registration/">
                            Log In
                        </Link>

                    </div>
                </div>
            </Container>
        </>
    )
}
export default SignUp

