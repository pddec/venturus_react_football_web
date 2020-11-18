import styled from 'styled-components';


export const SortTeams = styled.div`
    display:flex;
    margin: 20px 15px;
    height:40px;
    
    table{
        border-collapse:collapse; 
        width:100%;

        thead{

            th.divide{
                border-right: 2px solid #f4dff7
            }

            th{
                padding: 15px 10px;
                div{
                    display:flex;
                    justify-content:space-between;
                }
            }

        }

        tbody{
            
            td{
                border:0;
                border-bottom: 1px solid #f4dff7;
                padding:15px;
                div{
                    display:flex;
                    justify-content:space-between;
                    p{
                        padding-top:5px;
                    }
                    svg{
                        font-size:25px;
                        padding-left:10px;
                        text-decoration: none;
                        color: black;
                    }
                }
            }

            tr{
                border: 0;
                transition: background-color 0.2s;
                &:hover{
                    color:#d633b8;
                    td:first-child{
                        background:#f4dff7;
                        border-bottom: none;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                    }
                    
                    td:last-child{
                        background:#f4dff7;
                        border-bottom: none;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }

                    svg{
                       color:#d633b8; 
                    }

                } 
            }
        }
    }
`;

export const TitleBar =  styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    
    p{
        align:center;
        padding-top:8px;
        text-align: center;
        margin:20px;
        color:#a743b5;
        font-weight: bold;
        font-size:25px;
    }

    a#link{
        border:0;
        background:#a31f80;
        border-radius:10px 10px;
        text-align:center;
        font-size:40px;
        color:#FFF;
        margin:20px;
        width:45px;
        height:45px;
        text-decoration: none;
    }
`;

export const MainTeamPanel = styled.div`
    width:55%;
    height:680px;
    margin-right:45px;
    display:flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px 5px;

    hr.solid {
        border:0.1em solid #f4dff7;
    }
`;