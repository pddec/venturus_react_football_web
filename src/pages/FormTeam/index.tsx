import React, {ChangeEvent, useEffect, useRef, useState } from 'react';
import {FiTrash2} from "react-icons/fi";
import {useRouteMatch,useHistory} from 'react-router-dom';
import {uuid} from 'uuidv4';

import{MainFormPanel} from './styles';
import InputTags from '../../components/InputTags';
import {DynamicForm,publish} from "../../components/DynamicForm"
import {Input,Text,RadioInput} from '../../components/FormFields'
import api from './../../services/api'

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

    return <MainFormPanel>
        <section id="title">
            <p>Create Your Team </p>
        </section>
        <hr className="solid"/>
        <DynamicForm>
            <div className="vertical_container">
                <div className="horizontal_container space wrap">
                    <div className="vertical_container max_container space">
                        <Input label="Team Name" value="" onChange={()=>{}}/>
                        <Text  label="Description" value="" onChange={()=>{}}/>
                    </div>
                    <div className="vertical_container max_container space">
                        <Input placeHolder="https://myteam.com" label="Team Name" value="" onChange={()=>{}}/>
                        <RadioInput name="team_type" label="Team Type" options={["real","fantasy"]}/>
                        <InputTags id="tags_team"  label="Tags" />
                </div>
            </div>
               
            </div>
        </DynamicForm>
    </MainFormPanel>
}

export default FormTeam;