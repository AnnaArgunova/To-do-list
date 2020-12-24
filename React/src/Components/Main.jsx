import React, {useState} from 'react';
import {ListItems} from './ListItems/index';
import {AddList} from './AddList/AddList';
import {Grid3} from './Styles/style';
import {ListDetailsStart} from '../Components/ListDeteils/ListDetailsStart';
import {ListDetalisTo} from './ListDeteils/index.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { selectListAction } from '../Store/actions/list';



export const Main = ()=>{

    return(
        <Grid3>
            <Router> 
           
            <ListItems selectedList ={selectListAction}/>
            <Switch>
            <Route path="/" exact>
<ListDetailsStart/>
            </Route>
            <Route path="/listDetails" >
<ListDetalisTo />
            </Route>
        </Switch>
          <Link to = '/'></Link>
          <Link to = '/listDetails'></Link>
            <AddList></AddList>
           
        
           
    </Router>
      
        </Grid3>
    )
}