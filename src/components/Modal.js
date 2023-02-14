import React from 'react'

function Modal({ modal }) {
    return (
        <>
            {
                modal &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Well Done!</strong> Your Response has been submitted
                    </div>  
            }
        </>
    )
}

export default Modal