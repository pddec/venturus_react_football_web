import React, {useRef} from 'react';

import{MainFormPanel} from './styles';
import InputTags from '../../components/TagsInput';
import {DynamicForm,publish} from "../../components/DynamicForm";
import {Input,Text} from '../../components/TextInput';
import {RadioInput} from '../../components/RadiosInput';

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