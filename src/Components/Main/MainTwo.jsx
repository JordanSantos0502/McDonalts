import McNoSofa from "../img/McNoSofa.png";
import Restaurante from "../img/Restaurante.png";
import Banner from "../img/Banner.png";
import * as S from "./MainStyle.jsx";
export default function MainTwo() {
  function Card(props) {
    return (
      <S.cardMain>
        {/* Tag de imagem com src definido pela propriedade imgSrc */}
        <img src={props.imgSrc} alt="Imagem" />

        {/* Tag de título h3 com texto definido pela propriedade titulo */}
        <h3>{props.titulo}</h3>

        {/* Botão com texto definido pela propriedade botaoTexto e evento onClick */}
        <button>{props.botaoTexto}</button>
      </S.cardMain>
    );
  }
  return (
    <S.MainTwo>
      <h2>Promoção</h2>
      <S.BoxMainTwo>
        <Card
          imgSrc={McNoSofa}
          titulo="Que tal um #MéquiNoSofá?"
          botaoTexto="Clique aqui"
        />
        <Card
          imgSrc={Restaurante}
          titulo="venha conhecer nossa nova loja"
          botaoTexto="Clique aqui"
        />
        <Card
          imgSrc={Banner}
          titulo="Confira as medidas que o Méqui adotou!"
          botaoTexto="Clique aqui"
        />
      </S.BoxMainTwo>
    </S.MainTwo>
  );
}
