
import { WatchTV } from "./WatchTV"
export  function WatchTVList({quentities = [] }){
    return(
    <>
    {quentities.map((key) => (
        <WatchTV  key = {key}/>
    ))}
    </>
    )
}