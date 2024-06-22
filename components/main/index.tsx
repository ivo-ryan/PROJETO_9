import * as S from './style';
import Mockup1 from '../../assets/logo.png';
import { FaAngleDown } from 'react-icons/fa';
import Poster from '../../assets/capa.jpg';
import Simbolo from '../../assets/simbolo.png';

export const Main = () => {
    return (
        <main>
            <S.SectionDescription>
                <div >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat animi aut error assumenda! Repudiandae <b>Arise</b> tenetur esse perferendis sunt hic veritatis architecto aspernatur cupiditate quo quam magni, consequuntur dicta!
                    </p>
                </div>

            </S.SectionDescription>

            <S.SectionDescription2>
                <S.DescriptionContainer >
                    <S.TextDescription >
                        <h3>O jogo de Solo Leveling Arise </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur dolore expedita laborum quas! Amet similique nobis eveniet provident, fugit error nemo! Exercitationem, quidem dolor harum dolore magni optio delectus?</p>
                    </S.TextDescription>

                    <img src={Mockup1} alt="" />
                </S.DescriptionContainer>
                
            </S.SectionDescription2>

            <S.SectionArise3>
                <S.AriseContainer >
                    <S.BoxDepoimento>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, temporibus fugiat suscipit ipsam assumenda distinctio accusantium necessitatibus nobis facilis, magnam maiores omnis, nemo voluptatibus quis totam recusandae aliquid tempore illo!</p>

                        <p><b>Solo Leveling</b></p>
                    </S.BoxDepoimento>
                </S.AriseContainer>
            </S.SectionArise3>

            <S.AriseGame>
                <S.AriseGameContainer>
                    <S.TitleContainer>
                        <h3>Como podemos ajudar sua empresa </h3>
                        <FaAngleDown />
                    </S.TitleContainer>

                    <S.FlexGame>
                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>

                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>

                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>

                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>

                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>

                        <S.BoxGamePlay>

                            <img src={Poster} alt="" />

                            <S.GamePlayWarper>

                                <h2>E-mail marketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis nemo accusantium voluptate nostrum quidem voluptates </p>
                                <a href="#">Orçamento</a>
                            </S.GamePlayWarper>
                        </S.BoxGamePlay>
                    </S.FlexGame>

                </S.AriseGameContainer>
            </S.AriseGame>

            <S.GamePort>
                <S.GameContainer>
                    <h2>Algumas empresas que tivemos a oportunidade de trabalhar</h2>

                <S.Guilds>
                    <div>
                        <img src={Simbolo} alt="" />
                    </div>

                    <div>
                        <img src={Simbolo} alt="" />
                    </div>

                    <div>
                        <img src={Simbolo} alt="" />
                    </div>

                    <div>
                        <img src={Simbolo} alt="" />
                    </div>
                </S.Guilds>

                </S.GameContainer>
            </S.GamePort>
        </main>
    )
}