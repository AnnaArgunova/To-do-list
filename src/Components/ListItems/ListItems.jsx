import React from 'react';
import {list} from '../../List';
import {CardList} from './CardList';
import {Grid3_1} from '../Styles/style'


export const ListItems = ()=>{
        
return(
    <Grid3_1>
        <h2>List</h2>
        <ul>
        {
            
list.map((item)=> <CardList key={item.id} element = {item}/>)
        }
        </ul>
    </Grid3_1>
)
}
