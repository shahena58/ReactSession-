// // // import React from "react";

// // // export class HoverCounter extends React.Component{

// // //     state = {
// // //         count: 0
// // //     }


// // //     inCrementCount = () =>{
// // //         this.setState(
// // //             (prevState) =>(
// // //                 {count:prevState.count + 1 }
// // //             )
// // //         )
        
// // //         // this.setState({count : this.state.count  + 1})
// // //     }

    
// // //     render(){
// // //         const {count} = this.state
// // //         return(
// // //             <>
// // //             <h1 onMouseOver={this.inCrementCount}> Hovered  {count} Times </h1>
// // //             </>
// // //         )
// // //     }
// // // }

// // import WithCounter from "./HOC/WithCounter"
// // const HoverCounter = (props) =>{

// //     const {count, inCrementCount} = props
// //     return (
// //         <>
// //          <h1 onMouseOver={inCrementCount}> Hovered  {count} Times </h1>
// //         </>
// //     )
// // }

// // export default WithCounter(HoverCounter)

// // import WithCounter from "./HOC/WithCounter";


// // const HoverCounter = ({count, inCrementCounter}) =>{

// //     return(
// //         <>
// //         <h1 onMouseOver={inCrementCounter}>hover { count} counter</h1>
// //         </>
// //     )
// // }


// // export default WithCounter(HoverCounter)


// import React from "react";

//  export default class HoverCounter extends React.Component{

//     // state = {
//     //     count: 0
//     // }

//     // inCrementCounter = () =>{
//     //     this.setState(
//     //         (prevState) =>({
//     //             count: prevState.count + 1
//     //         })
//     //     )
//     // }

//     render(){
//         // const {count} = this.state
//         const {count, inCrementCounter} = this.props
//         return(
//             <>
//             <h1 onMouseOver={inCrementCounter}>Hover {count} counter</h1>
//             </>
//         )
//     }
// 


export default function HoverCounter({count, incrementCounter}) {
  return (
    <h1 onMouseOver={incrementCounter}>HoverCounter {count}</h1>
  )
}
