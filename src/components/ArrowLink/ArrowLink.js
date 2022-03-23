import cheveron from "../../assets/Icons/chevron_right-24px.svg";
import "./ArrowLink.css";
import '../../index.css';

export default function ArrowLink({ text, action}){
    return(
        <div className="ArrowLink" onClick={(event) => action(event)}>
            <span>{text}</span>
            <img src={cheveron} />
        </div>
    )
}