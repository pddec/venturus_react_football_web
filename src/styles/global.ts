import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    body{
        background:#f4dff7;
        -webkit-font-smoothing: antialiased;
    }

    body,input,button{
        font:16px Roboto, sans-serif;
    }

    #root{
        max-width:100%;
        margin:0;
    }

`;