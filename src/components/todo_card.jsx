import React, { isValidElement, useContext, useState } from "react";
import { todo_context } from "../context";

const TodoCard = ({data,onDeleteEvent}) => {

 console.log(data);
 

const handleClick = (status,val)=>{
  onDeleteEvent(status,val)
 
  
  
  
}

  
  

  return (
<>
<li>
  {data.completed ? (
    <strike>{data.text}</strike>
  ) : (
    data.text
  )}
  <span onClick={() => handleClick(true, data)}>x</span>
  
</li>

  
</>
  );

};

export default TodoCard;