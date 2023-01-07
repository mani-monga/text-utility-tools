import React, { useState } from 'react';

export default function Form(props) {
  const handleupcase = () => {
    // console.log("UpperCase was Clicked");
    if(text.length=== 0){
      props.showalert("Enter Something To Proceed","warning")}
    else{let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted To UpperCase","success");}
  }
  const handlelowcase = () => {
    if(text.length=== 0){
      props.showalert("Enter Something To Proceed","warning")}
    else{let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted To LowerCase","success");}
  }
  const handleclc = () => {
    if(text.length === 0){
      props.showalert("Nothing To Clear","danger")}
    else{let newText = "";
    setText(newText);
    props.showalert("Cleared","success");}
  }
  const handlecopy = () => {
    if(text.length === 0){
      props.showalert("Enter Something To Proceed","warning")}
    else{
    var txt = document.getElementById('mybox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showalert("Copied","success");}
  }

  const handleextraSpaces = () => {
    if(text.length===0){
      props.showalert("Enter Something To Proceed","warning")}
    else{let newText = text.split(/[ ]+/);
    setText(newText.join(" "));}
  }
  const HandleOnChange = (event) => {
    
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here');

  return (
    <><div className={`container border border-2 border-primary bg-{props.mode} text-${props.mode === 'light'?'dark':'light'} my-3 p-2`}>
      <div><h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control border border-2 border-dark" value={text} onChange={HandleOnChange} id="mybox" rows="6"></textarea>
        </div>
          <button className="btn btn-primary mx-3" onClick={handleupcase} >UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handlelowcase} >LowerCase</button>
          <button className="btn btn-primary mx-3" onClick={handleclc} >Clear All</button>
          <button className="btn btn-primary mx-3" onClick={handlecopy} >Copy To Clipboard</button>
          <button className="btn btn-primary mx-3" onClick={handleextraSpaces} >Remove Extra Spaces</button>
      </div>
      <div className="container p-0 my-4">
        <h1>Text Summary</h1>
        <p><span className='bg-success text-light fw-bold px-2 mx-1'>{text.split(" ").length}</span> words , 
         <span className='bg-success text-light fw-bold px-2 mx-1'>{text.length}</span> characters , 
         <span className='bg-success text-light fw-bold px-2 mx-1'>{text.split(".").length}</span> sentences </p>
        <p><span className='bg-success text-light fw-bold px-2 mx-1'>{(text.split(" ").length)*0.008}</span> minutes to read this paragraph. </p>
      </div>
      </div>
    </>

  )
}
