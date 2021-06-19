import React from 'react';

const Child = (props) =>{

    function changeHelper()
    {
        props.setTxt("New Text");
    }

    return (
        <div>
            <p>{props.txt}</p>
            <button onClick={changeHelper}>Change Text</button>
        </div>



    )


}

export default Child;