// import React from "react";

export default function Pad(props) {

  return (
    <button 
      className="pad"
      style={
        {
          backgroundColor: props.color,
          boxShadow: `0px 5px 0px ${props.color}`,

        }
      }
      className={props.on ? "on" : undefined}
      onClick={() => props.handleClick(props.id)}
    >
    </button>
  )
}