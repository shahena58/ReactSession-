import React from "react";

export class ButtonTV extends React.Component {

     shouldComponentUpdate(nextProps) {
        const { locale: currentLocale } = this.props;
        const { locale: nextLocale } = nextProps;

        // যদি locale পরিবর্তন হয়, তবেই কেবল রি-রেন্ডার (true) হবে
        if (currentLocale === nextLocale) {
            return false; // কোনো পরিবর্তন না হলে রেন্ডার ব্লক করবে
        } else {
            return true;  // locale পরিবর্তন হলে রেন্ডার হতে দেবে
        }
    }
    render(){
        const {change, locale, show, enable } = this.props

        if(!enable) return null
        return(
            <>
            <h1>ButtonTV</h1>
            <button onClick={() => change(locale)}>
                {locale === "bn-BD" ? "click here" : "গড়ি পরিবর্তন করুন"}
            </button>
            {show && <p>Hello</p>}
            </>
        )
    }
}