import styled from "styled-components";


export const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
word-break: break-all;
max-width: 400px;
margin-left: 5px;

@media screen and (max-width: 570px) {
    width: 100%;
}

@media screen and (max-width: 440px) {
    width: 100%;
}
`

export const FormH2 = styled.h2`
color: black;
font-size: 2rem;
display: flex;
justify-content: center;

@media screen and (max-width: 440px) {
font-size: 1.3rem;
margin-top: 50px;
}
`

export const FormLabel = styled.label`
display: flex;
justify-content: center;
word-break: break-all;
width: 350px;
color: #e73213;

@media screen and (max-width: 570px) {
    width: 100%;
}

@media screen and (max-width: 440px) {
    width: 100%;
}
`

export const FormInput = styled.input`
margin-bottom: 10px;
height: 40px;
border: 1px solid grey;
`

export const FormButton = styled.button`
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background-color: #e73213;
border-radius: 5px;
color: #fff;
height: 35px;
border: none;
cursor: pointer;
margin-bottom: 10px;
`

export const FormColumnContainer = styled.div`
display: flex;
flex-direction: column;
width: 350px;

@media screen and (max-width: 570px) {
 width: 300px;
}

@media screen and (max-width: 440px) {
 width: 225px;
 margin-left: 3px;
}


`