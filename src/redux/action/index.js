import React from 'react';

const eventHandleOdd=()=>{
    window.location.href="Odd"
}
const eventHandleEven=()=>{
    window.location.href="Even"
}



function UserSeperation(){
    return(
        <div style={{ textAlign: 'center' }}>
            <h1>API FETCH</h1>
            <button type="button" className="btn btn-dark" onClick={eventHandleOdd}>Odd</button>
            {/* <button style={{backgroundColor:'black', color:'white'  }} type='button' onClick={eventHandleOdd}>Odd</button> */}
            &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-dark" onClick={eventHandleEven}>Even</button>
            {/* <button style={{backgroundColor:'black', color:'white'}} type='button' onClick={eventHandleEven}>Even</button> */}
        </div>
    )
}
export default UserSeperation;