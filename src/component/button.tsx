import React from 'react';
import useGS from "../lib/useGS";

export const Button: React.FC = () => {

    const { state, setState } = useGS('default');

    const onClick = () => {
        state ? setState(state + 1) : setState(1)
    }

    return (
        <button onClick={onClick}>+1</button>
    )
}