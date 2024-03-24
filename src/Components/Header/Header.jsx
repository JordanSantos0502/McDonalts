import logoMc from '../img/logoMc.png'
import appOne from '../img/appOne.svg'
import appTwo from '../img/appTwo.svg'
import * as S from './HeaderStyle.jsx'
export default function Header(){
    return(        
        <S.ContainerHeader>
            <S.GlobalStyle/>
            <figure>
                <img src={logoMc} alt="" />
            </figure>
            <S.BoxHeaderTwo>
                <div>
                    <img src={appOne} alt="Celular" />
                    <p>Baixe o App</p>
                </div>
                <button>Peça seu Méqui<img src={appTwo} alt="Celular" /></button>
            </S.BoxHeaderTwo>
        </S.ContainerHeader>
    )
}