import React, {useState} from "react";
export default function TextForm(props) {
    const handleUpClick= () =>{
     let newText = text.toUpperCase();
     setText(newText);
    }
    const handleLowClick= () =>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearText=()=>{
      setText('');
    }
    const handleCopyText=() =>{
      let text= document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace =() =>{
      let newText= text.split(/[ ] +/);
      setText(newText.join(" "));
    }
    // const handleOnChange= (event) =>{
    //     setText(event.target.value);
    //    }
    const[text, setText] =useState("Enter Your Text Here");
  return (
      <>
    <div className="container">
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea value={text}  onChange={(e) => setText(e.target.value)} className="form-control" id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}> Convert To Upper Case</button>
      <button className="btn btn-primary ms-2" onClick={handleLowClick}> Convert To Lower Case</button>
      <button className="btn btn-primary ms-2" onClick={handleClearText}> Clear Text</button>
      <button className="btn btn-primary ms-2" onClick={handleCopyText}> Copy Text</button>
      <button className="btn btn-primary ms-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h4>your Text Summary</h4>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
