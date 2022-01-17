import React from "react"
export default function ItemConten(props){
    console.log(props.img)
    return (
<div class=" row justify-content-md-center col-sm-8 mt-3">
    <div class="col-sm rounded-left  border border-dark">
    <img src={props.img} alt={props.busnes} width={props.width} height={props.height} alt=""/>
    </div>
    <div class="col-sm-7  bg-dark text-white p-2">
    <h1>
        {props.title}
    </h1>
    <h3>
    {props.busnes}  
    </h3>
    <p>
    {props.conten} 
    <br></br>
    {props.date}
    </p>

    </div>
</div>
        
    )
}/*
*/