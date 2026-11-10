import React from "react";
import { ButtonTV } from "./ButtonTV";
export class WatchTV extends React.Component{

    state = {
        date: new Date(),
        locale: "en-US"
      }

    componentDidMount(){
        this.wt = setInterval(() => this.tiki(), 1000)
    }
    
        componentWillUnmount(){
            clearInterval(this.wt)
        }

    tiki = () =>{
        this.setState({date: new Date()})
    }


    handleClick = (locale) =>{
        this.setState({
            // locale: "bn-BD" 1
            // locale: locale / locale 2
            locale
        })
    }

    render(){
        const {date, locale} = this.state
 
        // use condition 5
    // let button;
    // if(locale === 'bn-BD'){
    //     button = ( <ButtonTV change = {this.handleClick}   locale = "en-US" />)
    // }else{
    //     button =  <ButtonTV change = {this.handleClick}   locale = "bn-BD" />
    // }
        return(
            <>
            <span> WatchTV: {date.toLocaleTimeString(locale)}</span>
            
            {/* <button onClick={this.handleClick}>click bangla</button> without value 1*/} 

            {/* <button onClick={() => this.handleClick("bn-BD")}>click bangla</button> with value 2 */}

           {/* <ButtonTV change = {this.handleClick.bind(this, "bn-BD")} /> function send into props **( in bind() function 3 )** */}
           {/* <ButtonTV change = {() => this.handleClick("bn-BD")}  />   function send into props **( in arrow ()  function 3 )**   */}
           {/* <ButtonTV change = {this.handleClick}   locale = "bn-BD" /> 4 */}
           {/* {button} use condition if else 5*/}
            
            {/* use condition ternary operator 6*/}
            {/* {locale === "bn-BD"?<ButtonTV change = {this.handleClick}   locale = "en-US" />:<ButtonTV change = {this.handleClick}   locale = "bn-BD" />} */}
            {locale === "bn-BD" ? (
                <ButtonTV change = {this.handleClick}  locale = "en-US" show = {false} enable = {false}/>
                ) : (
                  <ButtonTV change = {this.handleClick}  locale = "bn-BD" show  enable />
                )}
            </>
        )
    }
}