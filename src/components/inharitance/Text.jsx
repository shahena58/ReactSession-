import { Emoji } from "./Emoji.jsx";


export class Text extends Emoji{
    constructor(props){
        super(props)
      
    }
    
    render(){
        const decoratedTex = this.adEmoji(" i am javaScript Language", "❤️")
        
        return super.render(decoratedTex)
    }
}