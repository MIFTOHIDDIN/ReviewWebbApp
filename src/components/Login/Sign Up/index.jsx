
import { Button, Card, Form } from "react-bootstrap";
import React, { useEffect, useRef, useState, } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { app } from "../../../firebase/mock";
import { Icon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Sign In/style";
import { getDatabase } from "firebase/database";
import { Alert } from "antd";


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
                alert( "You have Signed Up Successfully!" )
                localStorage.setItem( "token", emailRef.current.value )
            } )
            .catch( err => {
                console.log( err, 'errr' )
                alert( "WARN!!! You have something wrong for SignUp,try again" )

            } )

    }


    const onGoogle = () => {
        signInWithPopup( auth, googleAuth ).then( ( result ) => {
            console.log( result )
            navigate( '/home' )
            alert( "You have Signed Up Successfully!" )
            localStorage.setItem( "token", emailRef.current.value )
            localStorage.setItem( "token", emailRef.current.value )
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult( result );
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        } ).catch( ( error ) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            alert( "WARN!!! You have something wrong for SignUp,try again" )

            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError( error );
            // ...
        } );
    }
    const onGithub = () => {

        signInWithPopup( auth, githubAuth )

            .then( ( result ) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult( result );
                const token = credential.accessToken;
                navigate( '/home' )
                alert( "You have Signed Up Successfully!" )
                localStorage.setItem( "token", emailRef.current.value )

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            } ).catch( ( error ) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError( error );
                alert( "WARN!!! You have something wrong for SignUp,try again" )

                // ...
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

