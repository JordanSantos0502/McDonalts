import * as S from "./MainStyle.jsx";
import hambunger from "../img/bigmac.png";
import batata from "../img/batata.png";
import sorvete from "../img/sorvete.png";
import { useState } from "react";
export default function Main() {
  const [imagem, setImagem] = useState(hambunger);
  const mudarImagem = (novaImagem) =>{
    setTimeout(() => {
        setImagem(novaImagem);
      }, 500);
  }

  return (
    <S.Main>
      <S.ContainerMainOne>
        <S.Img  src={imagem} alt="hambunger" key={imagem}/>
        <h3>
          BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?
        </h3>
      </S.ContainerMainOne>
      <S.ContainerMainTwo>
        <figure>
          <img id="hamburgerMain" src={hambunger} alt="hambunger" onClick={() => mudarImagem(hambunger)}/>
          <img id="batata" src={batata} alt="batata" onClick={() => mudarImagem(batata)}/>
          <img id="sorvete" src={sorvete} alt="sorvete" onClick={() => mudarImagem(sorvete)}/>
        </figure>
      </S.ContainerMainTwo>
    </S.Main>
  );
}
