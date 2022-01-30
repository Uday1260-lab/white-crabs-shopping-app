import styled from "styled-components";

export const ItemWrapper = styled.div`
    
    
    text-align: center;
    align-self: center;
    width: auto;
    .panel{
        width: auto;
        padding: 25px;
        margin: 50px;
        background-color: #ddd;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        .title{
            color: #9C0F48;
            font-size: 40px;
            padding: 20px;
        }

        p{
            font-size: 18px;
        }

        img{
            border-radius: 20px;
            padding: 10px;
        }

        .price{
            font-size: 25px;
            margin: 5px;
        }
        .button{
            color: #79018C;
            padding: 10px;
            margin: 10px;
            font-size: 20px;
        }

    }

`;

