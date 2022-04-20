import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
font-size: 1rem;
color: red;

@media screen and (max-width: 785px) {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    justify-content: center;
    align-items: center;

}

`