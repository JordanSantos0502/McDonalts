import McLogo from '../img/logoMc.png'
import PlayStore from '../img/PlayStore.png'
import AppStore from '../img/AppStore.png'
import * as S from './FooterStyle.jsx'
export default function footer(){
    return(
        <S.ContainerFooter>
            <S.boxFooter>
                <img src={McLogo} alt="Logo MacDonalts" />
                <h4>© McDonald’s 2024</h4>
            </S.boxFooter>
            <S.figureFooter>
                <img src={PlayStore} alt="Icone PlayStore" />
                <img src={AppStore} alt="Icone AppStore" />
            </S.figureFooter>
        </S.ContainerFooter>
    )
}