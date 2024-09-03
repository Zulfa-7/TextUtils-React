import React, { useState } from 'react';

export default function TextForm(props) {

  // STATES
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const clrClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra space removed", "success");
  };

  const handledwnldClick = () => {
    const element = document.createElement('a');
    const file = new Blob([text]);
    element.href = URL.createObjectURL(file);
    element.download = 'textutils.txt';
    document.body.appendChild(element);
    element.click();
    props.showAlert("Downloaded", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  const wordCount = text === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.split(' ').join('').length; // Exclude spaces from character count

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#0e0e0e' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#0e0e0e' }} 
            id="myBox" 
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clrClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handledwnldClick}>Download</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#0e0e0e' }}>
        <h2>Your text summary</h2>
        <p>{wordCount} words and {charCount} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
