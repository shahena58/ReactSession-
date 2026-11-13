
// // import React from "react";

// // const scaleNames = {
// //     c: "Celsius",
// //     f: "Fahrenheit"
// // }
// // export class TemperatureInput extends React.Component{

// // //     state = {
// // //         tempareture: ""
// // //     }
// // //  ontemperatureChange = (e) =>{

// // //     this.setState({
// // //         tempareture: e.target.value
// // //     })
// // //  }
// //     render(){
// //         // const {tempareture} = this.state
// //         const {scale, tempareture, ontemperatureChange} = this.props
// //         return(
// //             <>
// //             <fieldset>
// //                 <legend>Enter temperature in {scaleNames[scale]} :</legend>
// //                 {/* <input type="text" value={tempareture}  onChange={this.ontemperatureChange}/> */}
// //                 <input type="text" value={tempareture}  onChange={ontemperatureChange}/>
// //             </fieldset>

// //             </>
// //         )
// //     }
// // }


// const scaleNames = {
//     c: "Celsius",
//     f: "Fahrenheit"
// }
// export function TemperatureInput({scale,  temperature, ontemperatureChange}){
//         return(
//             <>
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]} :</legend>
//                 {/* <input type="text" value={tempareture}  onChange={ontemperatureChange}/> */}
//                 <input type="text" value={temperature}  onChange={(e) => ontemperatureChange(e, scale)}/>
//             </fieldset>

//             </>
//         )
 
// }
import React from "react"
const scaleNames = {
    c : "celsius",
    f: "Fahrenheit"
}
export function TemperatureInput ({scale, temperature, onTemperatureChange}){

        return(
            <>
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input type="text"  value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
            </fieldset>
            </>
        )
 
}