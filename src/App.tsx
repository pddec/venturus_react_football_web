import React from 'react';
import{BrowserRouter} from 'react-router-dom';

import Routers from "./routers";
import GlobalStyle from "./styles/global"
import MainHeader from './components/MainHeader';

function App() {
  return (
    <>
      <MainHeader/>
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
