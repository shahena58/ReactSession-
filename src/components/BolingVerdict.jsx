
export function BolingVerdict({celsius = 0}){
    if(celsius >= 100) {
        return <p>The water would boil</p>
    }else{
        return <p>water would not boil</p>
    }
}