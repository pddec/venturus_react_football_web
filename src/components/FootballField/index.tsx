import React from 'react';
import{FootballField,Players} from './styles';
import Postions from './Positions.json';

interface Props{
    name?:string;
    value?:string;
    id?:string;
    label?:string;
    placeholder?:string;
}


export const FootBallField:React.FC<Props> = (({name="",placeholder="",id="",label="",value=""}:Props) => {
    return <FootballField>
       
       {Object.entries(Postions["3-4-3"]).map(([key,value])=>{
               return(<Players top={value.top} left={value.left}>
                    <span>
                        <p>{key.replaceAll(/-\d/g,"")}</p>
                    </span>
                </Players>);})
        }

        <div className="outter_goal up_goal_outter">
            <div className="inner_goal"></div>
        </div>

        <div className="middle_line"></div>
        <div className="middle_circle"></div>

        <div className="outter_goal down_goal_outter">
            <div className="inner_goal down_goal_inner"></div>
        </div>
              
    </FootballField>
});