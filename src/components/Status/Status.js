import "./Status.css"
import "../../index.css";

export default function Status({ state }){
    
    
        if(state === "In Stock"){
            return(<div className="Item greenItem">{state}</div>)
        } else if(state === "Out of Stock"){
            return(<div className="Item redItem">{state}</div>)
        } 
}