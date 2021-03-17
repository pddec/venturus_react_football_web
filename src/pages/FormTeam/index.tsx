import React, { useRef } from "react";
import Postions from './../../components/FootballField/Positions.json';
import { MainFormPanel } from "./styles";
import InputTags from "../../components/TagsInput";
import { DynamicForm} from "../../components/DynamicForm";
import { Input, Text } from "../../components/TextInput";
import { RadioInput } from "../../components/RadiosInput";
import { DropDownInput } from "../../components/DropBoxInput";
import {PickPlayer} from "../../components/PickPlayer"
import {FootBallField} from "../../components/FootballField";

const FormTeam: React.FC = () => {
  const form_ref = useRef<HTMLFormElement>(null);

  return (
    <MainFormPanel>
      <section id="title">
        <p>Create Your Team </p>
      </section>
      <hr className="solid" />
      <DynamicForm ref={form_ref} name="team">
        <div id="row1" className="row_container">
          <div className="col_container">
            <Input
              name="team_name"
              label="Team Name"
            />
            <Text
              name="team_description"
              label="Description"
            />
          </div>
          <div className="col_container">
            <Input
              name="team_site"
              placeholder="https://myteam.com"
              label="Team WebSite"
            />
              <RadioInput
                name="team_type"
                label="Team Type"
                options={["real", "fantasy"]}
              />
              <InputTags
                id="tags_team"
                name="team_tags"
                label="Tags"
              />
          </div>
        </div>
        <div id="row2" className="row_container">
          <div className="col_container space">
              <DropDownInput
                name="team_formation"
                label="Select Formation"
                options={Object.keys(Postions)}
                defaultValue="0-0-0-0"
              />
          </div>
          <div className="col_container space">
              <PickPlayer 
                id="Pick_Player"
                name="pick_player" 
                label="Find Player"/>
          </div>
        </div>
      </DynamicForm>
    </MainFormPanel>
  );
};

export default FormTeam;
