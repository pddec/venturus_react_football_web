import React, {useRef} from 'react';

import{MainFormPanel} from './styles';
import InputTags from '../../components/TagsInput';
import {DynamicForm,publish} from "../../components/DynamicForm";
import {Input,Text} from '../../components/TextInput';
import {RadioInput} from '../../components/RadiosInput';
import {DropDownInput} from '../../components/DropBoxInput';

const FormTeam:React.FC = () =>{

    const form_ref = useRef<HTMLFormElement>(null);

    return <MainFormPanel>
        <section id="title">
            <p>Create Your Team </p>
        </section>
        <hr className="solid"/>
        <DynamicForm ref={form_ref} name="team" >
            <div id="field1" className="col_container_allwidth">
                <div className="row_container">
                    <div className="col_container">
                        <Input name="team_name" 
                            label="Team Name" 
                            onChange={(event:string) =>{publish("team_name",event)}}/>
                        <Text name="team_description" 
                            label="Description" 
                            onChange={(elem)=>{}}/>
                    </div>
                    <div className="col_container">
                        <Input 
                            name="team_site" 
                            placeholder="https://myteam.com" 
                            label="Team WebSite" 
                        />
                        <section data-comp="team_type">
                            <RadioInput 
                                name="team_type" 
                                label="Team Type" 
                                onChange={values => publish("team_type",values)}
                                options={["real","fantasy"]}
                            />
                        </section>
                        <section data-comp="team_tags">
                            <InputTags 
                                id="tags_team" 
                                label="Tags" 
                                onChange={values => publish("team_tags",values)}
                            />
                        </section>
                    </div>
                </div>
            </div>
            <div id="field2" className="col_container_allwidth">
                <div className="row_container">
                    <div className="col_container space">
                        <section data-comp="team_tags">
                            <DropDownInput
                                label="Select Formation"
                                options={['3 - 2 - 2 - 3',
                                        '3 - 2 - 3 - 1',
                                        '3 - 4 - 3',
                                        '3 - 5 - 2',
                                        '4 - 2 - 3 - 1',
                                        '4 - 3 - 1 - 1',
                                        '4 - 3 - 2',
                                        '4 - 4 - 2',
                                        '4 - 5 - 1',
                                        '5 - 4 -1']}
                                defaultValue="0-0-0-0"
                            />
                        </section>
                    </div>
                </div>
            </div>
        </DynamicForm>
    </MainFormPanel>
}

export default FormTeam;