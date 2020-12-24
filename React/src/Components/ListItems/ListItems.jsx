import React from 'react';
import {CardList} from './CardList';
import {Grid3_1} from '../Styles/style';
import {list} from '../../List'


export const ListItemsComponent = ({selectedList, selectListAction, ...rest})=>{
      console.log("rest>>>", rest.list);
    
return(
    <Grid3_1 >
        <h2 className = "center_title">List</h2>
        <ul>
        {
            
list.map((i)=> <CardList key={i.id} element = {i} selectedList = {selectListAction}/>)
        }
        </ul>
    </Grid3_1>
)
}
