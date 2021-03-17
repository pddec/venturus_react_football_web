import React, { useEffect, useState } from 'react';
import api from "./../../services/api"
import{InputPick} from './styles';
interface DropDownProp{
    id?:string;
    name?:string;
    label?:string;
    value?:string;
}

function hasFourLetters(string:string){
    return string.length === 4;
}

export const PickPlayer:React.FC<DropDownProp> =(({name="",label="",id=""}:DropDownProp) => {
    
    const[playerTrigger,setPlayerTrigger] = useState("");
    const[players,setPlayers] = useState([]);

    useEffect(function callApi_PickPlayer(){
        if(!hasFourLetters(playerTrigger)) return;
        
        

    },[playerTrigger]);

    return <>
        <InputPick>
            <input id={id}
                className="input_area"
                onChange={event => setPlayerTrigger(event.currentTarget.value)}
                name={name}/>
            <label htmlFor="PickPlayer" >
                {label}
            </label>
        </InputPick>
    </>
});