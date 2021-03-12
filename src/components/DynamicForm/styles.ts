import styled from 'styled-components';

export const FormBody=styled.section`
        width:100%;
        margin:20px;
    form{
        display:flex;
        flex-direction:column;
        align-items:center;

        .col_container_allwidth{
            display:flex;
            flex-direction:column;
            width:100%;
            margin:auto;
        }

        .col_container{
            display:flex;
            flex-direction:column;
            margin:auto;
            width:40%;
        }

        .wrap{
            flex-wrap:wrap;
        }

        .space{
            justify-content:space-between;
            
        }

        .row_container{
            display:flex;
            width:100%;
        }
        
    }

`