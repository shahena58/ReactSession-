
// import Counter from './Counter'
// import HoverCounter from './HoverCounter'
// // import ThemeContext from '../context/themeContext'
// import React from 'react'


import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../context/themeContext';
import { useContext } from 'react';

export default function Content() {

    const context = useContext(ThemeContext)
    const {theme, switchTheme} = context
  return (
    <div>
        <h1>this is a content</h1>
        <Counter>
            {(count, incrementCounter) => (
                    <HoverCounter 
                        count={count} 
                        incrementCounter={incrementCounter} 
                        theme={theme} 
                        switchTheme = {switchTheme}
                    />

            )}

        </Counter>
    </div>
  );
}


// export default function Content() { //{theme}
//   return (
//     <div>
//         <h1>this is a content</h1>
//          <Counter>
//             { (count, incrementCounter) => { // value
//               return <ThemeContext.Consumer>
//                         {({theme, switchTheme}) => (
//                          <HoverCounter
//                          switchTheme = {switchTheme}
//                           count = {count}
//                            incrementCounter = {incrementCounter} 
//                            theme = {theme}
//                            />
//                          )}
//                     </ThemeContext.Consumer>
//                  }}
//          </Counter>
//     </div>
//   )
// }


// export default class Content extends React.Component { 
//     render() {
//         const {theme, switchTheme} = this.context
//          return (
//     <div>
//         <h1>this is a content</h1>
//          <Counter>
//             { (count, incrementCounter) => (
//                          <HoverCounter
//                          switchTheme = {switchTheme}
//                           count = {count}
//                            incrementCounter = {incrementCounter} 
//                            theme = {theme}
//                            />
//                  )}

//          </Counter>
//     </div>
//   )
//     }
// }

// Content.contextType = ThemeContext



// export default class Content extends React.Component { 
//     render() {
//          return (
//     <div>
//         <h1>this is a content</h1>
//          <Counter>
//             { (count, incrementCounter) => { // value
//               return <ThemeContext.Consumer>
//                         {({theme, switchTheme}) => (
//                          <HoverCounter
//                          switchTheme = {switchTheme}
//                           count = {count}
//                            incrementCounter = {incrementCounter} 
//                            theme = {theme}
//                            />
//                          )}
//                     </ThemeContext.Consumer>
//                  }}
//          </Counter>
//     </div>
//   )
//     }
// }


     {/* <Counter>
            { (count, incrementCounter) =>(
                <HoverCounter  count = {count} incrementCounter = {incrementCounter} theme = {theme}/>
            ) } 
         </Counter> */}

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
