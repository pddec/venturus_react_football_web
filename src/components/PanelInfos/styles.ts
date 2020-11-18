import styled from 'styled-components';

export const MainInfoPanel = styled.div`
    width:55%;
    height:680px;
    display:flex;
    flex-direction: column;

    div#topfive{
        
        width:100%;
        height:380px;
        background-color: #fff;
        border:0;
        border-radius: 5px 5px;

        p.title{
        padding-top:8px;
        padding-bottom:8px;
        margin:20px;
        color:#a743b5;
        font-weight: bold;
        font-size:25px;
    }

        hr.solid {
            border:0.1em solid #f4dff7;
        }

        div.container{
            margin-top:15px;
            display:flex;
            justify-content:space-around;
            flex:1;

            label{
                padding:5px;
            }

            div.container_avg_age{
                width:280px;
        
                section{
                    margin:5px;
                    height:240px;
                    background-color:#f4dff7;
                    border:1px solid #f4dff7;
                    border-radius:5px;

                    a{
                        display:flex;
                        flex:1;
                        text-decoration: none;
                    }

                    button.avg_btn{
                        margin:2px;
                        padding:10px;
                        background:#fff;
                        border:1px solid #f4dff7;
                        border-radius:5px;
                        display:flex;
                        flex:1;
                        justify-content:space-between;
                    }
                }
            }
        }


    }
`;