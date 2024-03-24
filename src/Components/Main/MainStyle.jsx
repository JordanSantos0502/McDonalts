import styled from "styled-components";

export const Main = styled.main`
  background-color: #ffc72c;
`;

export const ContainerMainOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    color: white;
    font-size: 50px;
    width: 530px;
    line-height: 60.51px;
    span {
      color: #db0007;
    }
  }
`;
export const Img = styled.img`
  width: 324.04px;
  height: 300px;
  animation: myAnim 2s ease 0s 1 normal forwards;
  @keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateX(-48px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateX(-26px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateX(-13px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateX(-6.5px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateX(-4px);
	}

	25%,
	55%,
	75%,
	87%,
	98% {
		animation-timing-function: ease-out;
		transform: translateX(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateX(0px);
	}
}
`;

export const ContainerMainTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  figure {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #hamburgerMain {
    width: 118.57px;
    height: 100px;
    cursor: pointer;
  }
  #batata {
    width: 99px;
    height: 120px;
    cursor: pointer;
  }
  #sorvete {
    width: 72px;
    height: 110px;
    cursor: pointer;
  }
`;

//==================MAIN TWO====================//

export const MainTwo = styled.main`
  background-color: #feb706;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    height: 20vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
  }
`;
export const BoxMainTwo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50vh;
`;
export const cardMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 38vh;
  border-radius: 20px;
  gap: 30px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  img {
    width: 281px;
    height: 156px;
    border-radius: 10px 10px 0px 0px;
  }
  h3 {
    width: 255px;
    text-align: justify;
    font-size: 20px;
  }
  button {
    border: none;
    border-radius: 10px;
    background-color: #ffbc0d;
    width: 162px;
    height: 41px;
    font-weight: 400;
    font-size: 20px;
  }
`;
