import React, { useEffect, useState } from 'react'


function FetchResponse({ showHandler, data }) {

    return (
        <>
            <div className="container" style={{ background: 'inherit', color: 'black' }}>
                {showHandler != null ?
                    <h1 className='text-center mt-3 text-white'>Your Pretty Responses</h1>
                    : <h1 className='text-center mt-3 text-white'>Your Pretty Responses</h1>}

                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {showHandler &&
                            data.map((element,index) => {
                                return (
                                    <div className="col" key={element._id}>
                                        <div className="card h-100">
                                            <div className="card-header">
                                                {`Response No : ${index+1}`}
                                                
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{element.name}</h5>
                                                <p className="card-text">{element.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default FetchResponse