import React from "react";

export class Watch extends React.Component{

constructor(props){
super(props)
this.fruits = "apple"
}
 render(){
    return(
        <>
        <p>{new Date().toString()}</p>
        <p>Hello</p>
     
        </>
    )
 }
}