import React from "react";


export class Form extends React.Component{
    // state = {
    //     title: "javascript"
    // }

    // handleChange = (e) =>[
    //    this.setState({
    //     title: e.target.value
    //    }) 
    // ]
    //   render(){
    //     const {title} = this.state
    //     return(
    //         <>
    //         <form>
    //             <input type="text" placeholder="enter Title" value = {title} onChange={this.handleChange} />
    //             <p>{title}</p>
    //         </form>
    //         </>
    //     )
    //   }
    //  ..............................................................................
//     state = {
//         title: "javascript",
//         text: "javascript is awesome",
//         library: "React",
//         isAwesome: true,
//     }

//     handleChange = (e) =>{

//         // this.setState({
//         //     [e.target.name]: e.target.value,
//         // })
//         console.log(e)
//      if(e.target.type === "text" ){
//            this.setState({
//             title: e.target.value,   
//         })

//      }else if(e.target.type === "textarea" ){
//            this.setState({
//             text: e.target.value,   
//         })
//      }else if(e.target.type === "select-one" ){
//            this.setState({
//             library: e.target.value,   
//         })
//      }else if(e.target.type ="checkbox" ){
//         this.setState({
//             isAwesome: e.target.checked,
//         })
//      }

//     }

//     submitHandler = (e) =>{
//             const {title, text, library, isAwesome} = this.state
//         e.preventDefault()
//         console.log(title, text, library, isAwesome) 
//     }
//   render(){
//     const {title, text, library, isAwesome} = this.state
//     return(
//         <>
//         <form onSubmit={this.submitHandler} >
//             <input placeholder="enter Title" value={title} onChange={this.handleChange} />
//             <br /> <br />
//             <p>{title}</p>
//             <textarea type ="text" value = {text} onChange={this.handleChange} ></textarea>
//             <br /><br />
//             <select value = {library} onChange={this.handleChange}>
//                 <option value="React">React</option>
//                 <option value="Angular">Angular</option>
//             </select>
//             <br /><br />
//             <input type="checkbox" checked = {isAwesome} onChange={this.handleChange} />
//             <br /><br />
//             <input type="submit" value = "submit" />
//         </form>
//         </>
//     )
//   }

state = {
    title: "javascript",
    text: "javascript is Awesome",
    isAwesome: true,
    library: "React"
}


hangleChange = (e) =>{

  if(e.target.type === "text" ){
      this.setState({
        title: e.target.value
    })
  }else if(e.target.type === "textarea" ){
    this.setState({
        text: e.target.value
    })
  }else if(e.target.type === "checkbox" ){
    this.setState({
        isAwesome: e.target.checked
    })
  }else if(e.target.type === "select-one" ){
    this.setState({
        library: e.target.value
    })
  }
}

submitHandler = (e) =>{
    e.preventDefault()
     const {title, text, isAwesome, library} = this.state
    console.log(title, text, isAwesome, library)  
}

render(){

    const {title, text, isAwesome, library} = this.state
    return(
        <>
        <form onSubmit={this.submitHandler} >

            <input type="text"  value = {title} onChange={this.hangleChange} /> <br/><br />
            <textarea value = {text} onChange={this.hangleChange} ></textarea><br/><br />
            <input type="checkbox" checked = {isAwesome} onChange={this.hangleChange}  /><br/><br />
            <select value={library} onChange={this.hangleChange} >
                <option value="React">React</option>
                <option value="Angular">Angular</option>
            </select> <br/><br/>
            <input type="submit" value= "submit" />
        </form>
        
        </>
    )
}


}