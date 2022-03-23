import sort from "../../assets/Icons/sort-24px.svg";
import "./TableTitles.css";

export default function TableTitles({ titles }){
    let columns = [...titles];
    console.log(columns);
    //Row Headings
    const titlesJSX = columns.map((title,i) =>{
        if(i+1< columns.length){
            return(
                <div>
                    <span>{title}</span>
                    <img src={sort} alt="sort"></img>
                </div>
            )
        } else {
            return(
                <div>
                    <span>{title}</span>
                </div>
            )
        }
        
    });

    return(
        <div  className="TableTitles">
            {titlesJSX}
        </div>
        
    )
}