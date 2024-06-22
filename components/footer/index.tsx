import * as S from './style';
import Sung from '../../assets/jin-woo-removebg-preview.png';

export const Footer = () => {
    return (
       <S.FooterContainer>
            <S.ContainerText>
                <p>Copyright <span>© 2024</span> by Ivo Ryan | All Rights Reserved</p>
            </S.ContainerText>

            <S.ContainerImage>
                <img src={Sung} alt="" />
        </S.ContainerImage>
       </S.FooterContainer>
    )
}