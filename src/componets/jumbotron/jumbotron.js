import React from "react";
import{ Cv }from '../js/cv'
export default function Jumbo(props){
  var cv=Cv.idiom.Es.profile.conten[0]
return (
<div class="jumbotron jumbotron-fluid mb-0 ">
    <div class="container">
      <h1 class="display-4">{cv.title}</h1>
      <h3 class="">
        {cv.name}
      </h3>
      <p class="lead">{cv.conten}</p>
    </div>
</div>
)
}