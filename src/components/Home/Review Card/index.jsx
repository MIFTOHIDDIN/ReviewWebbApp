import React from "react";
import {
    Btn,
    Container,
    Content,
    Details,
    Footer,
    Image,
} from "../Review Card/style";

import Noimage from "../../../assets/img/No-Image-Placeholder.svg.png";
import { Rate, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../Home/Review Card/style";


const desc = [ "terrible", "bad", "normal", "good", "wonderful" ];
export const ReviewCard = ( props ) => {

    const { src: url, name: title, group: info } = props.data;
    const navigate = useNavigate();
    const [ value, setValue ] = useState( 3 );
    const [ likes, setLikes ] = useState( 1 )
    const [ islike, setIslike ] = useState( false )

    let token = localStorage.getItem( "token" )
    const onClick = () => {
        if ( token )
        {

            setLikes( likes + ( islike ? -1 : 1 ) )
            setIslike( !islike )
        } else
        {
            message.warning( "You have to Login first for like and dislike" )
        }


    }
    return (
        <>

            <Container>
                <Image onClick={ () => navigate( `/home/${ props.data._id }` ) } src={ url || Noimage } />
                <Content>
                    <div className="reviewName">
                        Name : { title || `Harry Potter Book` }
                    </div>
                    <div className="groupName">Group:{ info || "no data" }</div>
                    <Details>
                        <Details.Item onClick={ onClick } >
                            <Icon.Like />
                            <div className="info">{ likes } likes</div>
                        </Details.Item>
                        <Details.Item>
                            <Icon.Comment />
                            <div className="info">0 Comments</div>
                        </Details.Item>
                    </Details>
                    <Footer>
                        <span>
                            <Rate tooltips={ desc } onChange={ setValue } value={ value } />
                            { value ? (
                                <span className="ant-rate-text">{ desc[ value - 1 ] }</span>
                            ) : (
                                ""
                            ) }
                        </span>

                        <Btn onClick={ () => navigate( `/home/${ props.data._id }` ) }>
                            Read full review
                        </Btn>
                    </Footer>
                </Content>
            </Container>
        </>
    );
};
