import "./Button.css";
import "../../index.css"

export default function ({icon, text, color}){

    const classes = `Button ${color}`;
    return(
        <div className={classes}>{text}</div>
    )
}