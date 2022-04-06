import search from "../../assets/Icons/search-24px.svg";
import "./Search.css";
import "../../index.css"

export default function Search({value, listener}) {
    return (
        <div className="Search">
            <input type="text" placeholder="Search..." value={value} onChange={(event)=> {listener(event)}}></input>
            <img src={search}></img> 
        </div>
    )
}