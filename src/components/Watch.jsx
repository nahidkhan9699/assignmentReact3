import React from "react";
export const Watch = ({ title, category, price, desc })=>{
    return(
        <div className="sub">
           
        <h1>{title}</h1>
            <h3>{category}</h3>
        <h1>{price}</h1>
            <p>{desc}</p>
          
        </div>
    )
}