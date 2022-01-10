import React from "react";
export default function Jumbo(props){
return (
<div class="jumbotron jumbotron-fluid mt-2">
    <div class="container">
      <h1 class="display-4">{props.tit}</h1>
      <p class="lead">{props.tex}</p>
    </div>
</div>
)
}