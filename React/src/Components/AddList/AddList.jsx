import React from "react";
import { Input, Form} from "../Styles/style";
import {Grid3_2} from '../Styles/style';


export const AddList = ()=>{
    const date = new Date()
    let day = date.getDate()
    if (day <10 ) day = '0'+day
let month = date.getMonth()+1
if (month<10) month = '0'+month
  let now = `${date.getFullYear()}-${month}-${day}`;
 
    return(
      <Grid3_2>
                  <h2 className = "center_title">Add new list</h2>

           <Form name="test" method="post" action="">
               <div className = "add_input">
               <Input type="date" placeholder = "Add date" min = {now} size ="40"></Input>
               <Input type="text" placeholder = "Add title" size ="20"></Input>
               <textarea className = "add_textarea" name="comment" rows="5" placeholder = "Add text" ></textarea>
               </div>
               <div className = "add_button">
               <button>Add List</button>
               </div>
           </Form>
           </Grid3_2>
       
    )
}