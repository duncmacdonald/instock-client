import search from "../../assets/Icons/search-24px.svg";
import "./Search.css";
import "../../index.css"

export default function Search() {
    return (
        <div className="Search">
            <input type="text" placeholder="Search..."></input>
            <img src={search}></img> 
        </div>
    )
}