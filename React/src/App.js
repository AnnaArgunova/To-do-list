import React from 'react';
import {Header} from './Components/Header';
import {Main} from './Components/Main';
import {Conteiner} from './Components/Styles/style';

import './App.css';



function App() {
    return ( 
      <Conteiner> 
        <Header/>
     <Main/>
         </Conteiner>
    
    )
    }

    export default App;