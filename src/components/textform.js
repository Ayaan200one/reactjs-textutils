import React, { useState } from "react";
// import React from 'react'

export default function TextForm(props) {
  const [text, setText,handleOnChangeAlert] = useState("");

  const handleOnChange = (event) => {
    //   console.log("you have click on onchange");
    setText(event.target.value);
  };

  const UpperCase = () => {
    if (text !== "") {
      let newUppertext = text.toUpperCase();
      setText(newUppertext);
      props.showAlert("Converted to Uppercase", "success");
      //   console.log(newUppertext);
    } else {
      props.showAlert("There's Nothing To UpperCase Into TextBox", "warning");
    }
  };
  const LowerCase = () => {
    if (text !== "") {
      let newLowertext = text.toLowerCase();
      setText(newLowertext);
      props.showAlert("Converted to LowerCase", "success");
      //   console.log(newLowertext);
    } else {
      props.showAlert("There's Nothing To LowerCase Into TextBox", "warning");
    }
  };
  const ClearTxt = () => {
    if (text !== "") {
      let Cleartext = "";
      setText(Cleartext);
      props.showAlert("Converted to Cleartext", "success");
      //   console.log(Cleartext);
    } else {
      props.showAlert("There's Nothing To Clear Into TextBox", "warning");
    }
  };

  const CopyTxt = () => {
    if(text !== '')
    {
      var copyTxt = document.getElementById("text");
      copyTxt.select();
      navigator.clipboard.writeText(copyTxt.value);
      props.showAlert("Copied the text : "+ copyTxt.value, "success");
    }
    else
    {
      props.showAlert("There's Nothing To Copy Into TextBox","warning");
    }
    
  }

  }

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  return (
    <div>
      <div className="container my-3">
        <h1 style={{fontFamily: "monospace"}}>{props.heading}</h1>
        <textarea id="text" className="form-control textarea" placeholder="Enter Your Text Here..." value={text} onChange={handleOnChange} rows="8"></textarea>
        <div className="row">
          <div className="col-md-6">
            <div class="btn-group mt-4 btn-group-sm" role="group" aria-label="Basic mixed styles example">
              <button type="button" disabled={text.length === 0} onClick={UpperCase} class="btn btn-success">Upper Case</button>
              <button type="button" disabled={text.length === 0} onClick={LowerCase} class="btn btn-warning">Lower Case</button>
           </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div class="btn-group btn-group-sm mt-4 float-sm-start float-lg-end float-md-end" role="group" aria-label="Basic mixed styles example">
              <button type="button" disabled={text.length === 0} onClick={CopyTxt} class="btn btn-secondary">Copy</button>
              <button type="button" disabled={text.length === 0} onClick={RemoveExtraSpaces} class="btn btn-primary">Extra Spaces</button>
              <button type="button" disabled={text.length === 0} onClick={ClearTxt} class="btn btn-danger">Clear</button>
           </div>
          </div>
        </div>

      </div>

      <div className="container my-4">
      {/* style={props.mode === "dark" ? style2dark : style2light} */}
        {/* <h1>{props.summaryHead}</h1> */}
        <h3 style={{ font: "message-box", fontFamily: "monospace"}}>{props.summaryHead}</h3>
        <div className="">
        {/* style={props.mode === "dark" ? styledark : stylelight} */}
          <textarea className="form-control textarea" id="prevTxt" rows="3" value={text} placeholder="Text preview..."  onChange={handleOnChangeAlert} ></textarea>
        </div>
        <p className="my-3 text-center">
        <span>
         {" "}
          <b>{
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }</b> Word(s) 
        </span>
        <span className="mx-2"><b>{text.length}</b> char(s)</span>
        <span className="">
          <span>Reading Time:</span><b>{" "}</b>
          <b>{0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}</b>
        </span>
        </p>
      </div>
    </div>
  );
}
