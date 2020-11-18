import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import {MainInfoPanel} from './styles';

interface Players{
    age:number;
}

interface Teams{
    players:Players[];
    teamName:string;
}
interface avgAge{
    id_team:number;
    teamName:string;
    age:number;
}

const PanelInfos:React.FC = () =>{

    const[maxAge,setMaxAge] = useState<avgAge[]>([]);
    const[minAge,setMinAge] = useState<avgAge[]>([]);

    useEffect(()=>{
        const storage = localStorage.getItem("football_web:form");
        
        if(!storage) return;

        const teams = JSON.parse(storage) as Teams[];

        teams.forEach((team,index)=>{
            applyMaxAge(team,index);
            applyMinAge(team,index);
        });

    },[]);

    function applyMaxAge({teamName,players}:Teams,id_team:number){
        const age = players.map(players => players.age)
                    .reduce((acc,cur)=>Math.max(acc,cur));
        setMaxAge([...maxAge,{age,teamName,id_team}]);
    }

    function applyMinAge({teamName,players}:Teams,id_team:number){
        const age = players.map(players => players.age)
                    .reduce((acc,cur)=>Math.min(acc,cur));
        setMinAge([...minAge,{age,teamName,id_team}]);
    }

    return(
        
        <MainInfoPanel>
            <div id="topfive">
                <p className="title">Top 5</p>
                <hr className="solid"/>
                <div className="container">
                    <div className="container_avg_age">      
                        <label>Max age avg </label>
                        <section className="ageMax">
                            {maxAge.map(avg=>(
                                    <Link key={avg.id_team} to={`/teamForm/${avg.id_team}`} >
                                        <button className="avg_btn">
                                            <p>{avg.teamName}</p>
                                            <p>{avg.age}</p>
                                        </button>
                                    </Link>
                                ))
                            }
                        </section>
                    </div>
                    <div className="container_avg_age">      
                        <label>Min age avg </label>
                        <section className="ageMin">
                            {minAge.map(avg=>(
                                    <Link key={avg.id_team} to={`/teamForm/${avg.id_team}`}>
                                        <button className="avg_btn">
                                            <p className="text_btn_avg">{avg.teamName}</p>
                                            <p className="text_btn_avg">{avg.age}</p>
                                        </button>
                                    </Link>
                                ))
                            }
                        </section>
                    </div>
                </div>
            </div> 
        </MainInfoPanel>
    );
}

export default PanelInfos;