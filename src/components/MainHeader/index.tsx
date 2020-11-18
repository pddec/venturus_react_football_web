import React from 'react';

import {Header} from './styles';
import headerLogo from './../../assets/logo.png';

const MainHeader:React.FC = () =>{
    
   return ( 
        <Header>
            <>
                <div className="title">
                    <img src={headerLogo} alt="logo"/>
                    <p> Squad Management Tool </p>
                </div>
                <div className="user">
                    <p>User Name</p>
                    <span>UN</span>
                </div>
            </>
        </Header>
    )}

export default MainHeader;