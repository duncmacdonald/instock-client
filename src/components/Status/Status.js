import "./Status.css"
import "../../index.css";

export default function Status({ state }){
    
    
        if(state === "In Stock"){
            return(<span className="Item greenItem">{state}</span>)
        } else if(state === "Out of Stock"){
            return(<span className="Item redItem">{state}</span>)
        } 
}