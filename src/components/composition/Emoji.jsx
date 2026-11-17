import React from "react";
export class Emoji extends React.Component{

    adEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render(){
        return this.props.children({ademoji: this.adEmoji})
    }
}
