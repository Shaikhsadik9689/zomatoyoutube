import React from 'react';
import { useState } from 'react';

const Tsadi = () => {
    const [data, setData] = useState("");

    const [text,setText] = useState([]);

    const handel=()=>{
        setText([...text, data]);
    };

    return (
        <div>
            <h2>Tsadi</h2>
            <input type="text" onChange={(e)=>setData(e.target.value)} />
            <button onClick={handel}>Add</button>
            <ol>
                {text.map((item)=>{
                    return(
                        <h1>{item}</h1>
                    )
                })}
            </ol>
        </div>
    );
};

export default Tsadi;