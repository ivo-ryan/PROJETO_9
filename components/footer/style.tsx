import styled from "styled-components";


export const FooterContainer = styled.footer`
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #111;
        height: 200px;
        padding: 0 20px ;
`;

export const ContainerText = styled.div`
        color: #fff;

        span{
            color: #FCBA03;
        }

        @media (max-width: 500px) {
            font-size: 12px;
        }

`;


export const ContainerImage = styled.div`
        max-width: 150px ;
       img{
            width: 100%;
            filter:drop-shadow( 1px 0 1px #AA1DEF);
            animation: back 3s ease alternate infinite;

            @keyframes back {
                to{
                    filter: drop-shadow( 1px 0 5px #AA1DEF);
                }
            }
       }

       @media (max-width: 500px) {
            max-width: 100px;
        }
`;