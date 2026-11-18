
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import ThemeContext from '../context/themeContext'
export default function Content() { //{theme}
  return (
    <div>
        <h1>this is a content</h1>
         {/* <Counter>
            { (count, incrementCounter) =>(
                <HoverCounter  count = {count} incrementCounter = {incrementCounter} theme = {theme}/>
            ) } 
         </Counter> */}
         <Counter>
            { (count, incrementCounter) => { // value
                 return <ThemeContext.Consumer>{({theme}) =>  <HoverCounter  count = {count} incrementCounter = {incrementCounter} theme = {theme}/>}</ThemeContext.Consumer>
                 }}
         </Counter>
    </div>
  )
}

// import Counter from './Counter';
// import HoverCounter from './HoverCounter';
// import ThemeContext from '../context/themeContext';

// export default function Content() {
//   return (
//     <div>
//         <h1>this is a content</h1>
//         <Counter>
//             {(count, incrementCounter) => (
//                 <ThemeContext.Consumer>{({ theme }) => (
//                     <HoverCounter 
//                         count={count} 
//                         incrementCounter={incrementCounter} 
//                         theme={theme} 
//                     />
//                 )}</ThemeContext.Consumer>
//             )}
//         </Counter>
//     </div>
//   );
// }
