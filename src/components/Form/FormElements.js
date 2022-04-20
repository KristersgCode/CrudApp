import styled from "styled-components";


export const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const FormH2 = styled.h2`
color: black;
font-size: 2rem;

@media screen and (max-width: 440px) {
font-size: 1.3rem;
margin-top: 50px;
}
`

export const FormLabel = styled.label`

`

export const FormInput = styled.input`
margin-bottom: 7px;
height: 40px;

`

export const FormButton = styled.button`
background-color: black;
color: white;
cursor: pointer;
font-size: 1.2rem;
`

export const FormColumnContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;


@media screen and (max-width: 550px) {
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