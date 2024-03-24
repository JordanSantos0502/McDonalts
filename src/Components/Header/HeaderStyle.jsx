import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export const ContainerHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;

    figure{
        width: 12%;
        display: flex;
        justify-content: center;
    }
`
export const BoxHeaderTwo = styled.section`
    display: flex;
    height: 8vh;
    justify-content: space-around;
    align-items: center;
    width: 40%;

    div{
        display: flex;
        width: 15vw;
        align-items: center;
        justify-content: space-evenly;
        font-family: "Inter", sans-serif;
        font-weight: 300;
    }
    button{
        border: none;
        border-radius: 5px;
        background-color: #FFC72C;
        width: 14vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 6vh;
        font-family: "Inter", sans-serif;
        font-weight: 700;
    }
`

