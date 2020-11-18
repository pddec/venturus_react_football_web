import styled from 'styled-components';

export const MainPlayerPanel = styled.div`
    margin-top:25px;
    height:350px;
    overflow-y:scroll;


    div.selector_container{

        display:flex;
        padding:25px;
        justify-content:space-between;
        
        &:hover{
            border: 1px solid #e80936;
            border-radius:5px;
        }

        input{
            margin:15px;
        }
    }

    div.players_container{
        display:flex;
        flex:1;
        justify-content:space-between;

        p{
            
            padding:5px;
            text-align:start;
        }
    }

`;