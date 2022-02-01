import styled from "styled-components";

export const ItemWrapper = styled.div`
    
    
    text-align: center;
    align-self: center;
    width: 100%;
    .panel{
        width: auto;
        padding: 1%;
        margin: 3%;
        background-color: #ddd;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        .title{
            color: #9C0F48;
            font-size: 350%;
            padding: 2%;
        }

        p{
            font-size: 150%;
        }

        img{
            border-radius: 10%;
            padding: 2%;
        }

        .price{
            font-size: 200%;
            margin: 1%;
        }
        .button{
            color: #79018C;
            padding-to: 1%;
            padding-bottom: 1%;
            padding-left: 3%;
            padding-right: 3%;
            margin: 1%;
            font-size: 200%;
        }

    }

`;

