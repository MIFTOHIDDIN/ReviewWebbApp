import styled from "styled-components";


import { ReactComponent as Like } from "../../../assets/icon/like.svg"
import { ReactComponent as Comment } from "../../../assets/icon/comment.svg";

export const Container = styled.div`

height: 490px;
width: 100%;
max-width: 380px;
min-width: 343px;
margin: 20px;

background-color: ${({ theme }) => theme.bg};



`
export const Image = styled.img`
width: 100%;
max-height: 220px;
cursor: pointer;



`
export const Content = styled.div`
padding: 0 20px;
padding-top: 24px;
`
export const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 16px 0;


`
Details.Item = styled.button`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
border: none;
color:${( { theme } ) => theme.text} ;
background-color: ${( { theme } ) => theme.bg};



`

export const Btn = styled.button`
margin: 20px 0px;
cursor: pointer;
padding: 10px;
border-radius: 20px;
:hover{
    background-color: rgb(210,210,210);
}

`
export const Icon = styled.div`
`
Icon.Like = styled(Like)`
width: 24px;
fill:${({theme})=>theme.text};

`
Icon.Comment = styled(Comment)`
width: 24px;
fill:${({theme})=>theme.text};
`

export const Footer = styled.div`
border-top: 1px solid;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`




