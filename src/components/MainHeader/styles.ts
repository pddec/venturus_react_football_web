import styled from 'styled-components';

export const Header = styled.header`
    background-image: linear-gradient(to right, #e0226b , #a31f80);
    height:55px;
    display:flex;

    flex-direction: row;
    justify-content:space-between;

    div.title{
        flex-direction: row;
        display:flex;
        align-items: center;

        img{
            height:45px;
            margin-left:12px;
        }

        p{
            margin-left:12px;
            color:#FFF;
            font-weight: bold;
        }
    }

    div.user{
        flex-direction: row;
        display:flex;
        align-items: center;

        p{
            color:#FFF;
            font-weight: bold;
        }

        span{
            display:block;
            height:35px;
            width:35px;
            text-align:justify;
            margin-right:25px;
            margin-left:12px;
            padding-top:6px;
            padding-left:3px;
            font-size:20px;
            border:0;
            border-radius: 50%;
            background:#FFF
        }
    }

    
`;