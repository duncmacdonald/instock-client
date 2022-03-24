import "../../index.css";
import "./TextInput.css";
import exclaim from "../../assets/Icons/error-24px.svg";

//   To use:
//   value = state from the form you are building
//   name = match the name from your state
//   placeholder = the text when empty
//   label = the lable
//   listener = listener that listen an event with name and value -> save to state. Also set error to false.
//   error = true/false flag

export default function TextInput({ name, value, label, placeholder, listener, error }) {
  let inputClass = error ? "error" : "";

  let errorNotification = error ? "ErrorNotification" : "ErrorNotification hidden";

  return (
    <div className="TextInput">
      <label for={name}>{label}</label>
      <input
        type="text"
        id={name}
        name = {name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          listener(event);
        }}
      ></input>
      <div className={errorNotification}>
        <img src={exclaim} alt="error"></img>
        <span>This field is required</span>
      </div>
    </div>
  );
}
