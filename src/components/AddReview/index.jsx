import React, { useRef } from "react";
import { Button, Container, Inp, Wrap } from "./style";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const AddBook = () => {
    const navigate = useNavigate()
    const nameRef = useRef();
    const srcRef = useRef();
    const groupRef = useRef();
    const descRef = useRef();

    const { REACT_APP_BASE_URL: url } = process.env

    const onSubmit = ( e ) => {
        e.preventDefault()
        fetch( `${ url }/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                name: nameRef.current.value,
                description: descRef.current.value,
                src: srcRef.current.value,
                group: groupRef.current.value,
                token: localStorage.getItem( "token" ),
            } ),
        } )
            .then( ( res ) => res.json() )
            .then( ( res ) => {

                if ( res?.message )
                {
                    message.error( res.message )
                } else
                {
                    message.success( 'successfully created' )
                    navigate( '/home' )
                }
            }



            ).catch( ( err ) => console.log( err, "error" ),

            );
    };

    return (
        <div>

            <Container>
                <Wrap>


                    <h1>Add New Review</h1>
                    <Inp ref={ groupRef } type="text" name="group" placeholder="Group of your Review" />
                    <Inp ref={ nameRef } type="text" name="name" placeholder="Name of Your Review" />
                    <Inp ref={ srcRef } type="text" name="src" placeholder="Image src" />
                    <Inp
                        ref={ descRef }
                        type="text"
                        name="description"
                        placeholder="description"
                    />
                    <Button onClick={ onSubmit }>add book</Button>
                </Wrap>
            </Container>
        </div>
    );
};
export default AddBook;
