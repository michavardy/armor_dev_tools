import React from 'react';
const DisplayDummy = (props) => {
    return ( 
        <div>
            <h1> {props.dummy.data.inspector} </h1>
        </div>
     );
}
 
export default DisplayDummy;