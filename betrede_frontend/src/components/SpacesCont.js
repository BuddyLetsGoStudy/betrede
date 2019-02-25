import  React, { Component } from  'react';

const SpacesCont = (props) => {
  return(
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2" key={props.key}>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {
              props.author.map(a =>
                a.username + ' '
              )
            }
          </h6>
          <p class="card-text">{props.description}</p>
          <a href={`spaces/${props.id}`} class="btn btn-primary">Enter the space</a>
        </div>
      </div>
    </div>
  )
}

export  default SpacesCont;
