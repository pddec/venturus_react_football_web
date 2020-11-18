import styled from 'styled-components';

export const MainFormPanel = styled.div`
    max-width:95%;
    height:1080px;
    margin-right:45px;
    display:flex;
    flex-direction: column;
    background-color: #fff;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    margin-top:40px;
    border:0;
    border-radius: 5px 5px;

    section#title{
        padding-top:8px;
        margin:20px;
        color:#a743b5;
        font-weight: bold;
        font-size:25px;
    }

    hr.solid {
        border:3px solid #f4dff7;
    }
`


export const TeamForm=styled.form`

     h4{
        color:#b4b4b4;
        padding:25px;
    }

    div#infos{
        display:flex;
        justify-content:space-between;
        margin-left:140px;
        margin-right:140px;
        
        label{
            font-weight:bold;
            margin:0 5px 5px 5px;
            padding:10px 10px 5px 0;
        }

        div{
            select{
                border: 1px solid #737373;
                border-radius: 5px 5px;
                padding:10px 10px 5px 0;

                &:focus{ 
                    border: 2px solid #e80936;
                }
            }
        }
       

        section#select_input{
            padding:10px;
            
            label.radio{
                padding-right:5px;
                font-weight:lighter;
                color:#b4b4b4;
            }
        }

        div#info_1{
            margin-right:40px;
            display:flex;
            flex:1;
            flex-direction:column;
            

            button{
                color:#FFF;
                padding:10px;
                background-color:#870e7f;
                border: 1px solid #e80936;
                border-radius:5px;
               
            }

            div.selected_players{
                height:320px;
                padding:15px;
                margin-bottom:40px;
                justify-content:space-between;
                overflow-y:scroll;
                
                div.players_container{
                        display:flex;
                        justify-content:space-between;

                    p{
                        margin-top:15px;
                        text-align:start;
                    }
                }

                div.players_info{
                    padding:15px;
                }

                a.delete_btn{
                    border:0;
                    color:black;
                    border-radius:10px 10px;
                    text-align:center;
                    font-size:20px;
                    padding-top:50px;
                    text-decoration: none;
                }
            }

            

        }

        div#info_2{
            display:flex;
            flex:1;
            flex-direction:column;
        }      
    }

    section.fields{
        display:flex;
        flex-direction:column;
        
        h4{
            text-align:center;
            margin:20px;
        }
    }

    div.container_input{
            display: flex;
            flex-direction: column-reverse;

            input.text {
                border: 1px solid #737373;
                border-radius: 5px 5px;
                padding:6px;
            }

            select{
                border: 1px solid #737373;
                border-radius: 5px 5px;
                padding:6px;
            }

            input#description{
                height:220px;
            }

            .labels{
                display:block;
                text-align: left;
            }

            & input.text:focus{ 
                border: 2px solid #e80936;
                + label{
                    color:#e80936;
                }
            } 
           
        }

` 