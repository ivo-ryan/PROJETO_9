import styled from "styled-components";
import SoloLogo from '../../assets/arise.png';


export const Header = styled.header`
        background-image: url("https://images7.alphacoders.com/105/thumb-1920-1054068.png");
        min-height: 450px;
        padding: 0 0 30px 0;
        background-size: cover ;
        background-position: center ;
`;


export const Container = styled.div`
        max-width: 1280px;
        margin: 0 auto;
`;

export const MenuTopo = styled.div`
        display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0 2% ;
       transition: all .5s ease ;
`;

export const Logo = styled.div`
        background-image: url(${SoloLogo});
        background-size: 100% 100%;
        float: left;
        min-width: 100px;
        height: 90px;


        @media (max-width: 768px) {
            position: relative;
            z-index: 2;
        }
`;

export const NavContainer = styled.nav`
        float: right;  
        display:block ;

        ul{
            display: block;
            list-style: none;

            li{
                display: inline-block;
                margin: 0 15px;

                a{
                    color: #fff;
                    text-decoration: none;
                }
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
`;


export const NavContainerMobile = styled.nav`
        display: none;

        h2{
            display: none;
            cursor: pointer;
            font-size: 26px;
                svg{
                    color: #fff;
                }
            }
        


           ul{
            display: none;
            position: absolute;
            left: 0;
            width: 100%;
            padding: 70px 0 30px 0;
            top: 0;
            background-color: #31475e ;
            text-align: center;

            li{
                display: block;
                padding-bottom: 15px;

                a{
                    color: #fff;
                    text-decoration: none;
                }
            }
           } 
           
           
           @media (max-width: 768px) {
            display: block;
                
            h2{
                display: block;
                position: relative;
                z-index: 2;
            }
           }
`;


export const BtnNav = styled.li`
      
        a{
            border: 1px solid white;
            padding: 3px 8px;
            border-radius: 20px;
        }

        @media (max-width: 768px) {
            padding-bottom: 0;
            padding-top: 5px;
        }


`;

export const ChamadaHeader = styled.div`
        padding: 110px 0;
        margin: 0 2% ;

        h2{
            font-size: 47px;
            color: #fff;
           font-weight: normal;
        }

        p{
            font-size: 17px;
            color: #fff;
            margin-top: 10px;
            max-width: 600px;
        }

        input[type=email]{
            display: inline-block;
            border-radius: 100px;
            background-color: #fff;
            width: 237px;
            height: 35px;
            border: 0;
            outline: none;
            padding-left: 10px;
            margin: 20px 20px 0 0 ;

        }

        input[type=submit]{
            width: 181px;
            height: 43px;
            border-radius: 100px;
            border: 0;
            background-color: #ff5f27;
            color: #fff;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            text-align: center;

            p{
                display: inline-block;
            }

            input[type=email]{
                margin-bottom: 10px;
            }
        }
`;