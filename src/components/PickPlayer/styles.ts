import styled from 'styled-components';


export const InputPick = styled.section`

    display: flex;
    flex-direction: column-reverse;
    flex:1;

    .input_area{
      border: 1px solid #737373;
      border-radius: 5px 5px;
      padding:5px;
    }
    
    .input_area:focus{ 
        border: 2px solid #e80936;
        + label{
            color:#e80936;
        }
    } 


`