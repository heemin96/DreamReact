import React from 'react';
import { useState } from 'react';

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>{count} /<span className='total'>{total}</span></p>
            {/* <span className='number'>{count}</span> */}
            <button 
            className='button' 
            onClick={()=> {
                setCount((prev) => prev+1);
                onClick();
            }}
            >
                Add+
            </button>
        </div>
    );
}

