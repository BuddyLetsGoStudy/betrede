import  React, { Component } from  'react';

function TagsCont(props){
  return(
    <div key={props.key}>
      <a href={`tags/${props.id}`}><h1>{props.name}</h1></a>
    </div>
  )
}

export  default TagsCont;
