import React from 'react';
import {Grid3_2 } from '../Styles/style';

export const ListDetalisToComponent = (item)=>{
      const selectedItem= item.item.element
    return(
        <Grid3_2 >
       
        <h3 className = "listDetalis_title">{ item.item.element.title}</h3>
        <div className = "listDetalis">
        <div>Data: <span>{selectedItem.date}</span></div>
        <div>{selectedItem.text}</div>
        </div>
                </Grid3_2>
    )
}