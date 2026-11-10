import React from "react";

export class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps
        if(currentChange === nextChange && nextLocale === currentLocale){
            return false
        }else{
            return true;
        } 
    }
    render(){
        const {change, locale} = this.props
        return (
        <>
           <button type = "button" onClick={ ()=> change(locale)}>{locale === "bn-BD" ? "change clock": "গড়ি পরিবর্তন করুন"}</button>
           
        </>
        )
    }
}

