import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;
export const boxFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  img {
    width: 24px;
  }
  h4 {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-style: normal;
    color: #000000;
  }
`;

export const figureFooter = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;
