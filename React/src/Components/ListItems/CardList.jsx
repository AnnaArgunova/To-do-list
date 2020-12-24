import React, { useState } from "react";
import { Important, Card } from '../Styles/style';
import {

  Link
} from "react-router-dom";


export const CardList = ({ list, selectedList, ...rest }) => {

  const [isImportant, changeStatus] = useState(false);
  const onChangeStatus = () => {
    if (isImportant) changeStatus(false)
    if (!isImportant) changeStatus(true);

  }

  const addSelectedList = () => {
    selectedList(rest)
  }
  let color = 'grey';

  if (isImportant)
    color = 'orange'

  return (
    <Card>
      <Link to="/listDetails">
        <div onClick={addSelectedList} className="card_hover" >
          <span className='card_date'>{rest.element.date}</span>
          <span className='card_title'>{rest.element.title}</span>
          <Important onClick={onChangeStatus} important={color}>&#9733;</Important>
        </div>
      </Link>
 
    </Card>
  )
}
