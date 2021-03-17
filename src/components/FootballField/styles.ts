import styled from 'styled-components';

interface PlayersProps{
    top:string;
    left:string;
}

export const FootballField = styled.div`
    position:relative;
    margin-top:25px;
    
    width:350px;
    height:480px;
    border: 1px solid #737373;

    .middle_line{
        width:100%;
        height:50%;
        border-bottom: 1px solid #737373;
    }

    .middle_circle{
        position:relative;
        bottom:3em;
        margin:auto;
        width:6em;
        height:6em;
        border: 1px solid #737373;
        border-radius:100%;
    }

    .up_goal_outter{
        top:0;
    }

    .down_goal_outter{
        bottom:0;
    }

    .down_goal_inner{
        margin-top:3em;
    }

    .outter_goal{
        position:absolute;
        left:25%;
        width:50%;
        height:6em;
        border: 1px solid #737373;
    }

    .inner_goal{
        width:50%;
        margin-left:25%;
        height:3em;
        border: 1px solid #737373;
    }
   
`;

export const Players = styled.div<PlayersProps>`
    
    position:absolute;
    top:${(props) => `${props.top}`};
    left:${(props) => `${props.left}`};

    span{

        display: flex;
        align-items: center;
        justify-content: center;

        position:relative;
        top: 25%;
        left: 25%;

        width:45px;
        height:45px;

        border-radius:50px;
        border:3px solid #f4dff7;
      
        p{
            background-color:transparent;
        }
    }
`;