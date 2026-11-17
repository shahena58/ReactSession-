// import  ClickCounter  from "./components/ClickCounter"
// import  HoverCounter  from "./components/HoverCounter"
// import  InputCounter  from "./components/InputCounter"
// import  User  from "./components/User"
// import Counter from "./components/Counter"
// import ClickCounter from "./components/ClickCounter"
// import  HoverCounter  from "./components/HoverCounter"
// .....................................................................

import Counter from "./components/Counter"
import HoverCounter from "./components/HoverCounter"
import  ClickCounter from "./components/ClickCounter"
export function App() {

  return (
    <>
    {/* ............................................................... */}
    {/* <ClickCounter /> */}
    {/* <HoverCounter /> */}
    {/* <InputCounter /> */}
    {/* <User  name = {"sumit" /> */}
    {/* <User  name = {() => "sumit" /> */}
    {/* <User  name = {(isLoggedIn) => isLoggedIn? "shahena" : "guest"} /> */}
    {/* <User  name = {(isLoggedIn) => isLoggedIn? "shahena" : "guest"} /> */}
    {/* <User  render = {(isLoggedIn) => isLoggedIn? "shahena" : "guest"} /> */}
    {/* <Counter  render = {(count, inCrementCounter) => <ClickCounter count = {count} inCrementCounter = {inCrementCounter} /> } /> */}
    {/* <Counter  render = {(count, inCrementCounter) => <HoverCounter count = {count} inCrementCounter = {inCrementCounter} /> } /> */}

{/* ............................................................................... */}
    
   {/* <Counter render = { (count, incrementCounter) =><HoverCounter  count = {count} incrementCounter = {incrementCounter} /> } />
   <Counter render = { (count, incrementCounter) =><ClickCounter  count = {count} incrementCounter = {incrementCounter} /> } /> */}


   <Counter>
    { (count, incrementCounter) =><HoverCounter  count = {count} incrementCounter = {incrementCounter} /> } 
   </Counter>

   <Counter>
     { (count, incrementCounter) =><ClickCounter  count = {count} incrementCounter = {incrementCounter} /> } 
   </Counter>



    </>
  ) 
}



    {/* <Emoji>
      {  ({ademoji}) =>(
        <Backed>
            {(ba) => <Text ademoji={ademoji}  ba = {ba} />}
        </Backed>
      ) }
    </Emoji> */}
