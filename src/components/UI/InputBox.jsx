import React from "react"
import classes from "./InputBox.module.css"

const InputBox = props => {
  return (
    <input
      type='text'
      className={classes.input}
      value={props.value}
      onChange={props.inputChange}
      placeholder='Enter Robot Name!!!'
    ></input>
  )
}

export default InputBox
