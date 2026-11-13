
// // import { BolingVerdict } from "./BolingVerdict";
// // import React from "react";

import { Component } from "react";

// // export class Calculator extends React.Component{

// //     state = {
// //         tempareture: ""
// //     }
// //  ontemperatureChange = (e) =>{

// //     this.setState({
// //         tempareture: e.target.value
// //     })
// //  }
// //     render(){
// //         const {tempareture} = this.state
// //         return(
// //             <>
// //             <fieldset>
// //                 <legend>Enter temperature in Celsius:</legend>
// //                 <input type="text" value={tempareture}  onChange={this.ontemperatureChange}/>
// //             </fieldset>
// //              <BolingVerdict celsius = {parseFloat(tempareture)} />
// //             </>
// //         )
// //     }
// // }

// import React from "react";
// import { BolingVerdict } from "./BolingVerdict";
// import {TemperatureInput} from "./TemperatureInput"
// import { convert, toCelsius, toFahrenheit } from "../lib/converter";
// export class Calculator extends React.Component{

//     state = {temperature: "", scale: "c"}
//     handleChange = (e, scale) =>{
//         this.setState({
//             temperature: e.target.value,
//             scale,
//         })
//     }
//     render(){
//         // const {tempareture} = this.state
//         const {temperature, scale} = this.state;
//         const celsius = scal === "f" ? convert(temperature, toCelsius) : temperature
//         const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit) : temperature
//         return(
//             <>
//             <TemperatureInput scale = "c"   temperature={celsius} ontemperatureChange={this.handleChange} />
//             <TemperatureInput scale = "f" temperature={fahrenheit}  ontemperatureChange={this.handleChange} />
//              <BolingVerdict celsius = {parseFloat(celsius)} />
//             </>
//         )
//     }
// }

// import {convert, toCelsius, toFahrenheit} from "../lib/converter"
import { BolingVerdict } from "./BolingVerdict";
import { TemperatureInput } from "./TemperatureInput";
import {toCelsius, toFahrenheit, convert} from "../lib/converter"
export class Calculator extends Component{
   state = {
        temperature : "",
        scale : "c"
    }

    handleChange = (e, scale) =>{
        this.setState({
            temperature: e.target.value,
            scale
        })
    }
  

    render(){

        const {temperature, scale} = this.state
        const celsius = scale === "f" ? convert(temperature, toCelsius): temperature
        const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit): temperature
        return(
            <>
             <TemperatureInput  scale = "c"  temperature = {celsius}  onTemperatureChange = {this.handleChange}  />
             <TemperatureInput  scale = "f"  temperature = {fahrenheit}  onTemperatureChange = {this.handleChange}  />
            <BolingVerdict celsius={parseFloat(celsius)} />
            </>
        )
    }
}