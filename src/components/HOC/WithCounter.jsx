import React from "react"
const WithCounter = (OriginalComponent) =>{

    class NewComponent extends React.Component{

        state = {
            count: 0,
            inputCount: ""
        }

        inCrementCounter = (e) =>{
            // const val = e && e.target ? e.target.value : "";
            this.setState(
                (prevState) =>({
                    count: prevState.count + 1,
                    inputCount: e.target.value 
                })
            )
        }
        render(){
            const {count, inputCount} = this.state
            return <OriginalComponent  count = {count} inCrementCounter = {this.inCrementCounter} inputCount ={inputCount} />
        }
    }

    return NewComponent
}

export default WithCounter