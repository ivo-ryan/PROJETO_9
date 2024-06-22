import * as S from './style';
import {FaBars} from 'react-icons/fa';
import $ from 'jquery';

export const Header = () => {

	return (

		<S.Header>

			<S.Container >

			<S.MenuTopo >

				<S.Logo ></S.Logo>
				<S.NavContainer >
					<ul>
						<li><a href="">Sobre</a></li>
						<li><a href="">Serviços</a></li>
						<li><a href="">Contatos</a></li>
						<S.BtnNav className="btn-nav"><a href="">Quero um orçamento</ a></S.BtnNav>
					</ul>
				</S.NavContainer>

				<S.NavContainerMobile className='nav-mobile'>

					<h2 onClick={() => $('.nav-mobile ul').slideToggle()}><FaBars/></h2>
					<ul>
						<li><a href="">Sobre</a></li>
						<li><a href="">Serviços</a></li>
						<li><a href="">Contatos</a></li>
						<S.BtnNav className="btn-nav"><a href="">Quero um orçamento</ a></S.BtnNav>
					</ul>
				</S.NavContainerMobile>
			</S.MenuTopo>

		<S.ChamadaHeader >
			<h2> Você vendendo mais <br /> com automaçao web </h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, delectus quidem </p>

			<form action="">
				<input type="email" placeholder="Seu e-mail" required/>
				<input type="submit" name="acao" value="Quero saber mais!"/>
			</form>
		</S.ChamadaHeader>

			</S.Container>
		</S.Header>
	)
}