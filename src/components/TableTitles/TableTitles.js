import sort from "../../assets/Icons/sort-24px.svg";
import "../TableTitles/TableTitles.css";

export default function TableTitles({ titles }) {
  let columns = [...titles];

  //Row Headings
  const titlesJSX = columns.map((title, i) => {
    if (i + 1 < columns.length) {
      if (i === 2 || i === 3) {
        return (
          <div className="wide">
            <span>{title}</span>
            <img src={sort} alt="sort"></img>
          </div>
        );
      } else {
        return (
          <div>
            <span>{title}</span>
            <img src={sort} alt="sort"></img>
          </div>
        );
      }
    } else {
      return (
        <div className="narrow">
          <span>{title}</span>
        </div>
      );
    }
  });

  return <div className="TableTitles">{titlesJSX}</div>;
}
