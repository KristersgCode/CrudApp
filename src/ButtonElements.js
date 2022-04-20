import styled from "styled-components";

export const ButtonHistory = styled.button`
width: 100px;
height: 30px;
border-radius: none;
cursor: pointer;
margin-bottom: 20px;
font-size: 1rem;
margin-left: 5px;

@media screen and (max-width: 785px) {
 width: 350px;
 margin-bottom: 5px;
 margin-left: 0px;
}
@media screen and (max-width: 570px) {
 width: 300px;
 margin-bottom: 5px;
 margin-left: 0px;
}


@media screen and (max-width: 440px) {
 width: 230px;
 margin-bottom: 5px;
 margin-left: 0px;
}
`

export const ButtonDelete = styled.button`
width: 100%;
height: 40px;
border-radius: none;
background-color: black;
color: white;
cursor: pointer;
margin-left: 10px;
margin-bottom: 5px;
font-size: 1rem;
border: none;
`

export const ButtonEdit = styled.button`
width: 100%;
height: 40px;
border-radius: none;
cursor: pointer;
font-size: 1rem;
margin-left: 10px;
margin-bottom: 10px;
`