import React from 'react';
import '../template/ConstructorTemplate.css';

const Icon = (props) => {
    return ( 
        <button>
        <div className="icon_body"> 
            <div className="icon_symbol">{props.img}</div>
            <div className="icon_title">{props.title}</div>
        </div>
        </button>
     );
}
 
export default Icon;