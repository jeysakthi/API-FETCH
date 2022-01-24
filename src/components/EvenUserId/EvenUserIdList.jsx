import React from 'react';

const eventHandleOdd = () => {
    window.location.href = "Odd"
}
const Even = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>I'm Even</h3>
            <h3>API Fetch</h3>
            <button type="button" className="btn btn-dark" onClick={eventHandleOdd}>Odd UserId</button>
            {/* <button style={{ backgroundColor: 'black', color: 'white' }} type='button' onClick={eventHandleOdd}>Odd UserId</button> */}
            <br /><br />
            <div className='top-Margin'>
               
                    <div className='container' >

                        <div className="list-group-item list-group-item-action card text-white bg-dark mb-3"  >
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">
                                    {/* <Link to={`/contacts/ ${index+1}`}>{name}</Link>*/}
                                </h5>
                                <small> Hello</small>
                            </div>
                            <p className="mb-1">
                                Hii
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}
export default Even;