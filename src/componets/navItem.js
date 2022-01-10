import React from "react";
export default function NavItem(props){
    return(
        <li class="nav-item">
        <a class="nav-link" href={props.name}>{props.name}</a>
      </li>
    )
}