import styled from "styled-components";

export const SectionDescription = styled.section`
            text-align: center;
            padding: 30px 0;

            p{
                display: inline-block;
                max-width: 680px;
                font-weight: lighter;
                font-size: 22px;
                font-style: italic;
            }
`;


export const SectionDescription2 = styled.section`
        padding: 50px 0;
        

        img{
            max-width: 500px;
            float: left;
            width: 30%;
        }

        @media (max-width: 768px) {
           img{
            width: 100%;
            display: block;
            margin: 0 auto;
            max-width: 500px ;
            float: none;
            margin-top: 10px;
           }
        }
`;

export const DescriptionContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
`;

export const TextDescription = styled.div`
        float: left;
        width: 40%;
        padding: 0 15px;

        h3{
            color: #31475e;
            font-size: 22px;
            line-height: 32px;
            font-weight: bold;

        }

        p{
            color: #6a7c92;
            font-size: 15px;
            line-height: 25px;
            margin-top: 15px;
        }

        @media (max-width: 768px) {
            width: 100%;
            display: block;
            float: none;
           
        }
`;


export const SectionArise3 = styled.section`
            padding: 30px 0;          
`;

export const AriseContainer = styled.div`
            position: relative;
            margin: 0 auto;
            max-width: 960px;
            background-image:url("https://tm.ibxk.com.br/2024/04/12/12124231715120.jpg?ims=750x") ;
            background-size: cover;
            min-height: 350px;
`;


export const BoxDepoimento = styled.div`
            position: absolute;
            left: 50%;
            width: 70%;
            max-width: 506px;
            background-color: #fff ;
            padding: 10px 30px;
            bottom: -40px;
            box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5);

            p{
                font-size: 18px;
                color: #31475e;
                font-weight: lighter;
            }

            p+p{
                padding-top: 20px;
            }


            @media (max-width: 768px) {
                top: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
                bottom: auto;
            }
`;


export const AriseGame = styled.section`
            padding: 25px 0;
`;

export const AriseGameContainer = styled.div`
            max-width: 1100px;
            margin: 0 auto;
`;

export const TitleContainer = styled.div`
            text-align: center;

            h3,svg{
                color: #31475e;
                font-size: 22px;
                font-weight: normal;
            }
`;


export const FlexGame = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
`;

export const BoxGamePlay = styled.div`
            background-color: #fff;
            width: 30%;
            border-radius: 3px;
            background-color: #ffffff;
            box-shadow: 0 8px 20px 0 #ccc;
            height: 100%;

            img{
                width: 100%;
            }

            @media (max-width: 768px) {
                max-width: 400px;
                width: 100%;
            }
`;


export const GamePlayWarper = styled.div`
        padding: 20px;

        h2{
            color: #31475e;
            font-size: 20px;
            font-weight: normal;
        }

        p{
            margin: 8px 0;
            line-height: 1.6;
            font-weight: lighter;
            color: #6a7c92;
            font-size: 15px;
        }

        a{
            display: inline-block;
            border: 1px solid #6a7c92;
            color: #6a7c92;
            text-decoration: none;
            padding: 6px 12px;
            border-radius: 20px;
        }
`;


export const GamePort = styled.section`
            padding: 20px 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            h2{
                text-align: center;
                font-weight: normal;
                color: #31475e;
            }
`;

export const GameContainer = styled.div`
            max-width: 960px;
            margin: 0 auto;
            background-color: #f7f7f7;
            padding: 20px 10px;
            margin: 20px 0;
`;


export const Guilds = styled.div`
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            
            width:100%;

            div{
                width: 90px;
                border: 1px solid #ececec;

                img{
                    width: 100%;
                }
            }

            @media (max-width: 768px) {
                div{
                    display: flex;
                    justify-content: center;
                    width: 100%;

                    img{
                        width: 30%;
                    }
                }
            }
`;