import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Sucess")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Sucess")
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "Sucess")
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard", "Sucess")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "Sucess")
  };
  // const handleOnChange= (event) =>{
  //     setText(event.target.value);
  //    }
  const [text, setText] = useState("Enter Your Text Here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              background: props.mode === "dark" ? "rgb(17, 17, 104)" : "white",
              color:props.mode === "dark" ? "white" : "black" 
            }}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick}>
          {" "}
          Convert To Lower Case
        </button>
        <button className="btn btn-primary ms-2" onClick={handleClearText}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-primary ms-2" onClick={handleCopyText}>
          {" "}
          Copy Text
        </button>
        <button className="btn btn-primary ms-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>your Text Summary</h4>
        <p>
          {text.split(" ").filter((e) => {return e.length!==0}).length} Words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((e) => {return e.length !==0}).length} Minutes to Read </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
