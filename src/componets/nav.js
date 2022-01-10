import React from "react";
import ReactDOM from 'react-dom';
import Fafa from "./fafa/fafa"
import link from "../img/fafa/linkedin-brands.svg"
import git from "../img/fafa/github-brands.svg"
import mail from "../img/fafa/envelope-regular.svg"
import logo from "../img/log/logocom.png"
import NavItem from "./navItem";
let itema=["home","academy","skill"]
function Nav(){
    return(
<nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
  <Fafa im={logo} />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      {
        itema.map(item =>{
          return(
            <NavItem name={item}/>
          )
        }

        )
      }
    </ul>
    <span class="navbar-text">
    <Fafa im={git} link={"https://github.com/loky27"}/>
    <Fafa im={link} link={"https://www.linkedin.com/feed/"}/>
    <Fafa im={mail}/>
    </span>
  </div>
</nav>
    )
}
export default Nav