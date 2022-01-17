import React from "react";
import ItemConten from "../itemConten/itemConten";
export default function Cont(props){
  const cont= props.con;
  const items=cont.map( (item,index) => <ItemConten 
  key={index.toString()} 
  title={item.title}
  conten={item.cyti} 
  busnes={item.busnes}
  date={item.date}
  img={item.img}
  />   
  );   
  console.log(items)
    return(
<div class="jumbotron  mb-0 ">
  <h1>{props.title}</h1>
   <div>
   {
     items
    }
  </div>
</div>)
}