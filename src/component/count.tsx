import React from 'react';

import useGS from '../lib/useGS';

export const Count: React.FC = () => {
    const {state} = useGS('default')
    return <div>
        <span>当前计数</span><span>{state}</span>
    </div>
}