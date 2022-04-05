import "./Button.css";
import "../../index.css"

export default function ({icon, text, color, action}){

    const classes = `Button ${color}`;
    return(
        <div className={classes} onClick={action}>{text}</div>
    )
}