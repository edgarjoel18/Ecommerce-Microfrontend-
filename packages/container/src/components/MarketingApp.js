import {mount} from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react';

export default () => {
    const currentRef = useRef();

    useEffect(() => {
        mount(currentRef.current);
    });

    return <div ref={currentRef}>

    </div>
}







