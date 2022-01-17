import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"20px"}}>
      { props.alert && <div>
            <div className="alert alert-success" role="alert">
 <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
        </div>}
        </div>
    )
}
