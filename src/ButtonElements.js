import styled from "styled-components";

export const ButtonHistory = styled.button`
width: 350px;
height: 40px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background-color: #9dbeb7;
color: #fff;
border-radius: 5px;
border: none;
cursor: pointer;
margin-left: 5px;

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
width: 170px;
height: 40px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background-color: #e73213;
border-radius: 5px;
color: white;
cursor: pointer;
margin-left: 10px;
margin-bottom: 5px;
border: none;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

@media screen and (max-width: 570px) {
width: 145px;
}

@media screen and (max-width: 440px) {
width: 100px;
}
`

export const ButtonEdit = styled.button`
width: 170px;
height: 40px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background-color: #9dbeb7;
border-radius: 5px;
color: #fff;
border: none;
cursor: pointer;
margin-left: 10px;
margin-bottom: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
&:hover {
text-overflow: clip;
white-space: normal;
word-break: break-all;
min-height: 40px;
height: 100%; }

@media screen and (max-width: 570px) {
width: 145px;
}


@media screen and (max-width: 440px) {
width: 105px;
}
`
