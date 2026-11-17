import WithCounter from "./HOC/WithCounter";


const InputCounter = ({count, inCrementCounter, inputCount}) =>{

    return(
        <>
        <input value={inputCount} onChange={inCrementCounter} />

        <h1>input  { inputCount} counter</h1>
        </>
    )
}


export default WithCounter(InputCounter)