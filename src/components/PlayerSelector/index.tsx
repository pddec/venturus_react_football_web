import React from 'react';

import {MainPlayerPanel} from './styles';

interface Players{
    player_id:number;
    player_name: string;
    firstname: string;
    lastname: string;
    position:string;
    age:number;
    nationality:string;
}

interface Props{
    fnAddPlayers(players:Players):void;
    fnRemovePlayer({player_id}:Players):void;
    players:Players[];
}

const PlayerSelector:React.FC<Props> = ({players,fnAddPlayers,fnRemovePlayer}:Props) =>{

    function handleCheckedValues(e:React.ChangeEvent<HTMLInputElement>){
        const value =  e.currentTarget.value;
        const checked = e.currentTarget.checked;
        const playerIndex = players.findIndex(players => players.player_id === Number(value));

        if(!checked){
            fnRemovePlayer(players[playerIndex]);
            return;
        }

        fnAddPlayers(players[playerIndex]);

    }

    return (

        <MainPlayerPanel>
            {players.map(player=>(
                <div className="selector_container" key={player.player_id}>
                    <input type="checkbox" 
                        name="myCheckBox1"
                        value={player.player_id}
                        onChange={handleCheckedValues} 
                        defaultChecked={false} />

                    <div className="players_container">

                        <div className="players_info">
                            <p>{` ${player.firstname} ${player.lastname}`}</p>
                            <p>{player.nationality}</p>
                        </div>

                        <div className="players_info">
                            <p>{player.age}</p>
                            <p>{player.position}</p>
                        </div>
                </div>
            </div>
            
            ))
        }
                
        </MainPlayerPanel>
    );
}

export default PlayerSelector;