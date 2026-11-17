import React from "react";


export class Emoji extends React.Component{

    adEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render(overridth){
        let text = "i am the emoji component"
        if(overridth)  text= overridth
        return(
            <>
            <div>
                {text}
            </div>
            </>
        )
    }
}