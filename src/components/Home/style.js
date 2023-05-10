import styled, { css } from "styled-components";
import { ReactComponent as Recently } from "../../assets/icon/recently.svg";
import { ReactComponent as Grade } from "../../assets/icon/grade.svg";
const center = css`
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
max-width: 1440px;
margin: 0 auto;
flex-wrap: wrap;


`
export const Wrap = styled.div`
${ center }
justify-content: center;

`
Wrap.Title = styled.div`
font-size: 40px;
font-weight: 500;
`
Wrap.Button = styled.div`
display: flex;
align-items: center;
justify-content: end;
`
export const Button = styled.button`
margin: 10px 110px;
border: none;
background-color: wheat;
padding: 10px;
border-radius: 12px;


`

export const RecentlyAdded = styled.div`
${ center }
flex-wrap: wrap;
justify-content: center;
gap: 20px;
flex: 1;
max-height: 1000px;
min-height: 100px;

`

export const HighestGrades = styled.div`
${ center }
justify-content: center;
flex-wrap: wrap;
gap: 20px;
flex: 1;
max-height: 1000px;
min-height: 100px;



`
export const Icon = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
border-bottom: 1px solid;
`
export const Info = styled.div`
${ center }
`
Icon.Recently = styled( Recently )`
width: 20px;
fill: ${ ( { theme } ) => theme.text };

`
Icon.Grade = styled( Grade )`
width: 20px;
fill: #ffc107;

`
Icon.Paragraf = styled.p`
font-size: 20px;
font-weight: 600;


`
