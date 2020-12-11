import React, {useState} from "react";
import {Important, Card} from '../Styles/style';
import {
    
    Link
  } from "react-router-dom";

export const CardList = (props) => {
  const [isImportant,
    changeStatus] = useState(false);
  const onChangeStatus = () => {
    changeStatus(true);
  }
  let color = 'grey';

  if (isImportant) 
    color = 'orange'

  return (
    <Card>
        <Link to="/listDetails">
      {props.element.date}<span>
        {props.element.title}</span>
     </Link>
      <Important onClick={onChangeStatus} important={color}>&#9733;</Important>
    </Card>
  )
}
