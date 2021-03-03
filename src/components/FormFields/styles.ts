import styled from 'styled-components';

export const InputField = styled.div`
    display: flex;
    flex-direction: column-reverse;

    .input_area {
        max-width:auto;
        border: 1px solid #737373;
        border-radius: 5px 5px;
        padding:6px;
    }

    .text_box{
        resize: none;
    }

    select{
        border: 1px solid #737373;
        border-radius: 5px 5px;
        padding:6px;
    }

    .labels{
        display:block;
        text-align: left;
    }

    & .input_area:focus{ 
        border: 2px solid #e80936;
        + label{
            color:#e80936;
        }
    } 
`;

export const RadioField = styled.section`
    label{
        margin-left:10px;
    }

    .exemplo2 input[type=radio]{   
        display:none; /* Esconde os inputs */
    }

    .exemplo2 label {    
        cursor: pointer;
    }

    .exemplo2 input[type="radio"] + label:before {   
         border: 1px solid #5D5C5C;    
         content: "\00a0";    
         display: inline-block;    
         font: 16px/1em sans-serif;    
         height: 16px;    
         margin: 0 .25em 0 0;    
         padding:0;    
         vertical-align: top;    
         width: 16px;    
         border-radius:4px;
    }

    .exemplo2 input[type="radio"]:checked + label:before{
        background: #A0A0A0;    
        color: #FFF;    
        content: "\2713";    
        text-align: center;
    }

    .exemplo2 input[type=radio"]:checked + label:after, 
    .exemplo2 input[type="checkbox"]:checked + label:after {    
        font-weight: bold;
    }
`
