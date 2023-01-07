import React from 'react';

function Alert(props) {

    const upcase = (text) => {
        return(text.toUpperCase())
    }

    return( 
    props.alert && <div className={`alert alert-${props.alert.types} alert-dismissible fade show container w-50 my-2 fixed-bottom border-2 border-dark text-center rounded-pill`} role="alert">
        <strong> {upcase(props.alert.types)} ! </strong>: &#160; <em>{props.alert.msg}</em> 
    </div>
    
    )}

export default Alert;
