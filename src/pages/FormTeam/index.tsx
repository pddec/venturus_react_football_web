import React, {ChangeEvent, useEffect, useRef, useState } from 'react';
import {FiTrash2} from "react-icons/fi";
import {useRouteMatch,useHistory} from 'react-router-dom';
import {uuid} from 'uuidv4';

import{MainFormPanel,TeamForm} from './styles';
import TeamTags from '../../components/TeamTags';
import PlayerSelector from '../../components/PlayerSelector';
import api from './../../services/api'

interface FormValues{
    id:string;
    tags:string[];
    players:Players[];
    teamName:string;
    description:string;
    teamType:string;
    teamWeb:string;
    position:string;
}

interface Players{
    player_id:number;
    player_name: string;
    firstname: string;
    lastname: string;
    position:string;
    age:number;
    nationality:string;
}

interface Response{
    api:{
       players: Players[];
    }
}

interface RouteParams{
    id:string;
}

const FormTeam:React.FC = () =>{

    const{params} = useRouteMatch<RouteParams>();
    

    const formations = [    
        '3 - 2 - 2 - 3',
        '3 - 2 - 3 - 1',
        '3 - 4 - 3',
        '3 - 5 - 2',
        '4 - 2 - 3 - 1',
        '4 - 3 - 1 - 1',
        '4 - 3 - 2',
        '4 - 4 - 2',
        '4 - 5 - 1',
        '5 - 4 -1']

    const clearForm:FormValues = {
        id:"",
        tags:[],
        players:[],
        teamName:"",
        description:"",
        teamType:"",
        teamWeb:"",
        position:""
    }

    const [values,setValues] = useState<FormValues>(clearForm);
    const[players,setPlayers] = useState<Players[]>([]);

    const urlHist = useHistory();

    useEffect(()=>{
        if(!params.id) return;
        
        const id = Number(params.id);
        const storage = localStorage.getItem("football_web:form");
        
        if(!storage) return;
        
        const formValues = JSON.parse(storage) as FormValues[];

        console.log(id);
        
        setValues(formValues[id]);
    },[params.id]);

    useEffect(()=>{
        console.log("Values:",values);
    },[values]);

    function handleSearchPlayerName(e:React.KeyboardEvent<HTMLInputElement>){
        
        if (e.key !== 'Enter') return;

        const elementTarget = e.currentTarget;
        
        const playerName = elementTarget.value;

        if(playerName.length < 4) return;
        
        api.get<Response>(`players/search/${playerName}`)
        .then(response =>{
            const playersResp = response.data.api.players as Players[];
            console.log(playersResp);
            setPlayers(playersResp);
            elementTarget.value = "";
        });

    }

    const handleRemoveTag = (i:number) => {
        const tags = [ ...values.tags ];
        tags.splice(i, 1);
        handleTags(tags);
      };
    
      const handleAddTagKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
  
        if (e.key === 'Enter') {
  
            if(values.tags.find(tag => tag.toLowerCase() === inputValue.toLowerCase())) return;
          
            handleTags([...values.tags, inputValue]);

            e.currentTarget.value = "";
            
        } 
        
        if (e.key === 'Backspace' && !inputValue) {
            handleRemoveTag(values.tags.length - 1);
        }
      };

    function handleTags(tags:string[]){
        setValues(Object.assign({...values},{tags}));
    }

    function handleId(){
        if(values.id) return values;
        const id = uuid();
        return Object.assign({...values},{id})
    }

    function handleAddPlayers(players:Players){
        const newPlayers = [...values.players,players];
        if(!(newPlayers.length <= 11)) return;
        setValues(Object.assign({...values},{players:newPlayers}));
    }

    function handleTeamWeb(e:ChangeEvent<HTMLInputElement>){
        const teamWeb = e.currentTarget.value;
        setValues(Object.assign({...values},{teamWeb}));
    }
    

    function handlePlayerName(e:ChangeEvent<HTMLInputElement>){
        const teamName = e.currentTarget.value;
        setValues(Object.assign({...values},{teamName}));
    }

    function handleDescription(e:ChangeEvent<HTMLInputElement>){
        const description = e.currentTarget.value;
        setValues(Object.assign({...values},{description}));
    }

    function handleRadioSelect(e:ChangeEvent<HTMLInputElement>){
        const teamType = e.currentTarget.value;
        setValues(Object.assign({...values},{teamType}));
    }

    function handleSelect(e:ChangeEvent<HTMLSelectElement>){
        
        const position = e.currentTarget.value;
        setValues(Object.assign({...values},{position}));
    }

    function handleRemovePlayer({player_id}:Players){
        const newPlayers = [ ...values.players ];
        const playerIndex = values.players.findIndex(player=> player.player_id === player_id);
        newPlayers.splice(playerIndex, 1);
        setValues(Object.assign({...values},{players:newPlayers}));
    }

    function handleFormSubmitByEnter(e:React.KeyboardEvent<HTMLFormElement>){
        if (e.key !== 'Enter') return;
        e.preventDefault();
    }

    function handleFormSubmit(event:React.FormEvent<HTMLFormElement>):void{
        event.preventDefault();

        const valuesWithId = handleId();
        const storage = localStorage.getItem("football_web:form");
        
        if(!storage){
            localStorage.setItem("football_web:form",JSON.stringify([valuesWithId]));
            setValues(clearForm);
            setPlayers([]);
            urlHist.push('/');
            return;
        }

        const storageValues = JSON.parse(storage) as FormValues[];

        const findIndex = storageValues.findIndex(value => value.id === valuesWithId.id);

        if(findIndex !== -1){
            storageValues[findIndex] = valuesWithId;
            localStorage.setItem("football_web:form",JSON.stringify(storageValues));
            setValues(clearForm);
            setPlayers([]);
            urlHist.push('/');
            return;
        }

        localStorage.setItem("football_web:form",JSON.stringify([...storageValues,valuesWithId]));
        setValues(clearForm);
        setPlayers([]);
        urlHist.push('/');
    }
    
    return <MainFormPanel>
        <section id="title">
            <p>Create Your Team </p>
        </section>
        <hr className="solid"/>
        <TeamForm 
            onSubmit={handleFormSubmit}
            onKeyDown={handleFormSubmitByEnter}
        >
            <section id="team_info" className="fields">
                <h4>Team Information</h4>
                <div id="infos">
                    <div id="info_1">
                        <div className="container_input">
                            <input
                                value={values.teamName}
                                onChange={handlePlayerName} 
                                id="team_name" 
                                className="text"/>
                            <label htmlFor="team_name" className="labels">Team name</label>
                        </div>
                        <div className="container_input">
                            <input value={values.description}
                                onChange={handleDescription} 
                                id="description" 
                                type="text"
                                
                                className="text"/>
                            <label htmlFor="description" className="labels">Description</label>
                        </div>
                    </div>
                    <div id="info_2">
                        <div className="container_input">
                            <input
                                value={values.teamWeb}
                                onChange={handleTeamWeb}
                                placeholder="https://myteam.com"
                                id="team_web" 
                                className="text"/>
                            <label htmlFor="team_web" className="labels">Team Web</label>
                        </div>
                        <div className="container_input">
                            <section id="select_input">
                                <input
                                    onChange={handleRadioSelect}
                                    type="radio" 
                                    id="select_real" 
                                    name="drone" 
                                    value="real"/>
                                <label htmlFor="select_real" className="radio">Real</label>
                                <input
                                    onChange={handleRadioSelect}
                                    type="radio" 
                                    id="select_fantasy" 
                                    name="drone" 
                                    value="fantasy" />
                                <label htmlFor="select_fantasy" className="radio">Fantasy</label>
                            </section>
                            <label className="labels">Team type</label>
                        </div>
                        <div className="container_input">
                            <TeamTags 
                                tags={values.tags}
                                onRemove={handleRemoveTag}
                                onKeyDown={handleAddTagKeyDown}
                                />
                            <label>Tags</label>
                        </div>
                    </div>
                </div>
            </section>
            <section id="config_squad" className="fields">
                <h4>Configure Squad</h4>
                <div id="infos">
                    <div id="info_1">
                        <div>
                            <label className="labels">Select Formation</label>
                            <select 
                                onChange={handleSelect} 
                                name="subject" 
                                id="subject" 
                                value={values.position}>
                                <option value=" "></option>
                                ({formations.map(elem=>(
                                            <option key={elem} value={elem}>{elem}</option>
                                        )
                                    )}
                                );
                                
                            </select>
                            <label>Selected: {values.players.length} </label>
                        </div>
                        <div className="selected_players">
                            {values.players.map(player=>(
                                <div className="players_container" key={player.player_id}>
                                    <div className="players_info">
                                        <p>{` ${player.firstname} ${player.lastname}`}</p>
                                        <p>{player.nationality}</p>
                                    </div>

                                    <div className="players_info">
                                        <p>{player.age}</p>
                                        <p>{player.position}</p>
                                    </div>
                                    <a 
                                        className="delete_btn"
                                        href=" "
                                        onClick={e=>{
                                            e.preventDefault();
                                            handleRemovePlayer(player)
                                        } }>
                                        <FiTrash2 title="Delete"/>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <button type="submit" > Save </button>
                    </div>
                    <div id="info_2">
                        <div className="container_input">
                            <input 
                                onKeyDown={handleSearchPlayerName}
                                className="text" 
                                name="subject" 
                                id="subject" 
                                placeholder="Hit ENTER to search"/>
                            <label className="labels">Find Player</label>
                        </div>
                        <PlayerSelector 
                            players={players}
                            fnRemovePlayer={handleRemovePlayer}
                            fnAddPlayers={handleAddPlayers} />
                    </div>
                </div>
            </section>
        </TeamForm>
    </MainFormPanel>
}

export default FormTeam;