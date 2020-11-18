import React from 'react';

import{MainPanel} from './styles';
import PanelTeams from '../../components/PanelTeams';
import PanelInfos from '../../components/PanelInfos';

const Dashboard:React.FC = () =>{

    return (
        <MainPanel>
            <PanelTeams/>
            <PanelInfos/>
        </MainPanel>
    );
}

export default Dashboard;