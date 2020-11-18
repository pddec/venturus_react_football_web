import React, { useEffect, useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import { TiArrowUnsorted } from "react-icons/ti";
import { FiEdit2, FiTrash2,FiShare2 } from "react-icons/fi";

import {TitleBar,MainTeamPanel,SortTeams} from './styles';

interface Teams{
    teamName:string;
    description:string;
}

const PanelTeam:React.FC = () =>{

    const[teams,setTeams] = useState<Teams[]>([]);

    useEffect(()=>{
        const storage = localStorage.getItem("football_web:form");
        if(storage){
            setTeams(JSON.parse(storage));
        }
    },[]);

    function handleRemoveTeam(index:number){
        const tmpTeams = [ ...teams ];
        tmpTeams.splice(index, 1);
        setTeams(tmpTeams);
        localStorage.setItem("football_web:form",JSON.stringify(tmpTeams));
    }

    return (

        <MainTeamPanel>
            <TitleBar>
                <p>My Teams</p>
                <Link id="link" to="/teamForm">+</Link>
            </TitleBar>

            <hr className="solid"/>

            <SortTeams>
                <table>
                    <thead>
                        <tr>
                            <th className="divide">
                                <div>
                                    <p>Name</p>
                                    <TiArrowUnsorted/>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <p>Description</p>
                                    <TiArrowUnsorted />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team,id) => (
                                <tr key={id}>
                                    <td>{team.teamName}</td>
                                    <td id="edit" >
                                        <div>
                                            <p>{team.description}</p>
                                            <div>
                                                
                                                <a
                                                    onClick={e=>{
                                                        e.preventDefault();
                                                        handleRemoveTeam(id);
                                                    }}
                                                    href=" ">
                                                    <FiTrash2 title="Delete"/>
                                                </a>
                                                
                                                <FiShare2 title="Share"/>
                                                    <Link to={`/teamForm/${id}`}>
                                                        <FiEdit2 title= "Edit"/>
                                                    </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                )
                            )
                        }   
                    </tbody>
                </table>
            </SortTeams>

        </MainTeamPanel>
    );
}

export default PanelTeam;