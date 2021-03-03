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

    const form_ref = useRef<HTMLFormElement>(null);

    return <MainFormPanel>
        <section id="title">
            <p>Create Your Team </p>
        </section>
        <hr className="solid"/>
        <DynamicForm ref={form_ref} name="team" >
            <div className="vertical_container">
                <div className="horizontal_container space wrap">
                    <div className="vertical_container max_container space">
                        <Input name="team_name" label="Team Name" onChange={({currentTarget})=>{publish("team_name",currentTarget.value)}}/>
                        <Text  name="team_description" label="Description" onChange={(elem)=>{}}/>
                    </div>
                    <div className="vertical_container max_container space">
                        <Input name="team_site" placeholder="https://myteam.com" label="Team Name" onChange={()=>{}}/>
                        <RadioInput name="team_type" label="Team Type" options={["real","fantasy"]}/>
                        <section data-comp="team_tags">
                            <InputTags id="tags_team" label="Tags" onChange={values => console.log(values)}/>
                        </section>
                    </div>
                </div>
            </div>
        </DynamicForm>
    </MainFormPanel>
}

export default FormTeam;