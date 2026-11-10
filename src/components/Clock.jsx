import React from "react";
import { Button } from "./Button";
export class Clock extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {date: new Date()}
    // }
    
   state = {date: new Date(), locale: "bn-BD", }
   
    componentDidMount(){
       this.clockTimer =  setInterval(() =>{this.tick()}, 1000)
    }
    componentWillUnmount(){
        clearInterval( this.clockTimer)
    }
    tick(){
        this.setState({date: new Date()})
    }
    handleClick = (locale) =>{
    
        this.setState({
            locale: locale
        })
    }

    passiveVoice = () =>{
        alert("todays topic is passive voice at FM institue")
    }

    render(){
        const {locale, date} = this.state
        // 1 condisition use if else
        let button;
        if(locale === "bn-BD"){
            button = <Button change ={this.handleClick} locale = "en-US">Click here</Button>
        }else{
            button = <Button change ={this.handleClick} locale = "bn-BD">Click here</Button>
        }
        return(
            <>
            <button type="button" onClick = {this.passiveVoice}>Click here on the Button </button>
            <h1 className="heading">
            {/* <span>{this.state.date.toLocaleString(locale)}</span> */}
           </h1>
           {/* <button onClick={() => this.handleClick("en-US")}>Click here</button> */}
           {/* <Button change ={this.handleClick} locale = "en-US">Click here</Button> */}
          {/* {locale === "bn-BD" ? ( <Button change ={this.handleClick} locale = "en-US"/>) :( <Button change ={this.handleClick} locale = "bn-BD" />) } */}
           
           </>
        )
    }
}