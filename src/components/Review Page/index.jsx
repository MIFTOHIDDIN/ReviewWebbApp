import { Rate } from "antd";

import React, { useEffect, useState } from "react";
import {
    AllComments,
    Btn,
    Container,
    Form,
    Icon,
    Image,
    Info,
    Recommend,
    ReviewName,
    Username,
    Wrap,
    Wrapper,
} from "./style";

import { useParams } from "react-router-dom";
import UserImg from "../../assets/img/01 copy.jpg";
import NoImage from "../../assets/img/No-Image-Placeholder.svg.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase/mock";

const desc = [ "terrible", "bad", "normal", "good", "wonderful" ];


export const ReviewPage = ( props ) => {

    const param = useParams();
    const auth = getAuth( app )
    const [ user, setUser ] = useState( {} )

    onAuthStateChanged( auth, ( currentUser ) => {
        setUser( currentUser )
    } )

    const { REACT_APP_BASE_URL: url } = process.env

    console.log( url, "url" );
    const [ data, setData ] = useState();
    useEffect( () => {
        console.log( param.id, 'id' );
        fetch( `${ url }/books/${ param.id }` )
            .then( ( res ) => res.json() )
            .then( ( res ) => setData( res ) );
    }, [] );


    const [ value, setValue ] = useState( 3 );







    return (
        <>
            <Container>
                <Wrap>
                    <Image src={ data?.book?.src || NoImage } />
                    <span>
                        <Rate tooltips={ desc } onChange={ setValue } value={ value } />
                        { value ? (
                            <span className="ant-rate-text">{ desc[ value - 1 ] }</span>
                        ) : (
                            ""
                        ) }
                    </span>
                </Wrap>

                <ReviewName>
                    <div className="reviewName">
                        Name : { data?.book?.name || "no name" }
                    </div>
                </ReviewName>


                <Info>{ data?.book?.description }</Info>

                <AllComments>Comments</AllComments>
                <Wrapper>
                    <Wrapper.Img src={ UserImg } />

                    <Wrapper.Comment>
                        <Username>Miftohiddin</Username>
                        <Wrapper.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                            sunt mollitia ad ipsa ut dolor aperiam, ea nihil adipisci
                            cupiditate explicabo molestiae voluptate ipsum repellat doloribus
                            reiciendis ex quisquam quis esse libero iure similique. Nesciunt
                            vero officiis pudiandae eveniet error saepe labore quae fuga.

                        </Wrapper.Text>

                        <Username>{ user?.email }</Username>
                        <Wrapper.Text>

                        </Wrapper.Text>

                        <Form   >
                            <Wrapper.Inp id="usernameInput" type="text" placeholder="Add comment..." />
                            <Btn type="submit">Add</Btn>
                        </Form>
                    </Wrapper.Comment>
                </Wrapper>
            </Container>
        </>
    );
};
