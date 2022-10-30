import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
    const [count, setCount] =useState(0);
    const handleClick = () => setCount((prev)=> prev +1);
    return (
        <div className='container'>
            <div className='banner'>
                Total Count: {count} {count >10? '불꽃' : '눈'}
            </div>
            <div className='counter'>
                <Counter total={count} onClick = {handleClick}/>
                <Counter total={count} onClick = {handleClick}/>
            </div>
        </div>
    );
}

