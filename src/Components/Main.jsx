import React from 'react';
import {ListItems} from './ListItems/ListItems';
import {AddList} from './AddList/AddList';
import {list} from '../List';
import {Grid3} from './Styles/style';
import {ListDetailsStart} from '../Components/ListDeteils/ListDetailsStart';
import {ListDetalisTo} from '../Components/ListDeteils/listDatalisTo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const Main = ()=>{
 

    return(
        <Grid3>
            <Router> 
           
            <ListItems item = {list}></ListItems>
            <Switch>
            <Route path="/" exact>
<ListDetailsStart/>
            </Route>
            <Route path="/listDetails" >
<ListDetalisTo/>
            </Route>
        </Switch>
          <Link to = '/'></Link>
          <Link to = '/listDetails'></Link>
            <AddList></AddList>
           
        
           
    </Router>
      
        </Grid3>
    )
}