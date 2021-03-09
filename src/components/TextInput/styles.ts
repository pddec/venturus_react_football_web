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
