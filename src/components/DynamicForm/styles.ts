import styled from 'styled-components';

export const FormBody=styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:1;

    form{
        width:100%;

        .vertical_container{
            display:flex;
            flex-direction:column;
            
        }

        .max_container{
            
            

        }

        @media only screen and (max-width: 800px) {
            width:421px;
        }

        .wrap{
            flex-wrap:wrap;
        }

        .space{
            justify-content: space-around;
        }

        .horizontal_container{
            display:flex;
            flex:1;
        }
        
    }

`