import styled from 'styled-components';

export const ItemsInCartWrapper = styled.div`
    .panel{
        width: auto;
        padding: 1%;
        margin: 3%;
        background-color: #ddd;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        .item-img{
            padding: 1%;
            border-radius: 20%;
            height: 15%;
            width: 30%;
        }
        .title{
            color: #EA5C2B;
            font-size: 200%;
            margin: 1%;
        }
        .price{
            color: #041C32;
            
        }        
        .btn-dec{
            color: #0F0E0E;
            border: 1%;
            border-style: solid;
            margin: 2%;
            background: #FFAB76;
        }
        .btn-add{
            color: #0F0E0E;
            border: 1%;
            border-style: solid;
            margin: 2%;
            background-color: #BAFFB4;
        }
        .qty{
            font-size: 200%;
            padding: 1%;
        }
        .remove-btn{
            color: #0F0E0E;
            background-color: #CD1818;
            border: 1%;
            border-style: solid;
            margin: 2%;
        }
    }
`;