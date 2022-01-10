import React from "react";
import ReactDOM from 'react-dom';
export default function Fafa(props){
    return( 
        <a class="navbar-brand" href={props.link}>
        <img src={props.im} width="30" height="30" alt=""/>
      </a>
    )
}
