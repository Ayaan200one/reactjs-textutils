import React from 'react'

export default function Alertt(props) {
  const Capatalize = (word) => {
    const lower  = (word || '').toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
    /* if props.alert is not null then we will get rest code */
      <div className="AlertBox">
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{Capatalize(props.alert.type)} </strong>: {props.alert.msg}
        </div>}
      </div>
  )
}