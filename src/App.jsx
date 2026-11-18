
import Counter from "./components/Counter"
// import HoverCounter from "./components/HoverCounter"
import  ClickCounter from "./components/ClickCounter"
import Section from "./components/Section"
import React from "react"
import ThemeContext from "./context/themeContext"

export class App extends React.Component {

    state = {
        theme: `dark`
    }
    render(){
        const {theme} = this.state
        return(
            <div>
                   <Counter>
                       { (count, incrementCounter) =><ClickCounter  count = {count} incrementCounter = {incrementCounter} /> } 
                     </Counter>
                  <ThemeContext.Provider value ={{theme: theme} } >
                     {/* <Section theme = {theme} /> */}
                     <Section/>
                      </ThemeContext.Provider> 
            </div>
        )
    }
}



    {/* <Emoji>
      {  ({ademoji}) =>(
        <Backed>
            {(ba) => <Text ademoji={ademoji}  ba = {ba} />}
        </Backed>
      ) }
    </Emoji> */}
        //  <Counter>
        //     { (count, incrementCounter) =>(
        //         <HoverCounter  count = {count} incrementCounter = {incrementCounter} />
        //     ) } 
        //  </Counter>