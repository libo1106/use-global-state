import React, { useEffect, useState } from "react";

import { setState as setGlobalState, getState, addEventListener, EVENTS } from "./global-state";

export default function useGS (namespace: string) {

    const state = getState(namespace);
    // 直接暴露全局的
    const setState = (value: any) => setGlobalState(namespace, value);

    // 使用 useState 来触发 React render
    const [_, flushReactState] = useState(state);

    useEffect(() => {

        addEventListener(EVENTS.STATE_CHANGE, (state) => {
            console.log(`hook listener global state change: ${state}`)
            flushReactState(state);
        })

    }, []);

    console.log(`hook return state: ${state}`)

    return {state, setState}

}