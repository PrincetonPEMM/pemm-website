import React, { useRef, useEffect } from 'react';

declare global {
    interface Window {
        tableau: any;
    }
}

function EmbeddedMap() {
    const ref = useRef(null);
    const url = 'https://public.tableau.com/views/maps_16611808858560/Sheet1';

    const initViz = () => {
        new window.tableau.Viz(ref.current, url, {
            width: "100%",
            height: "90vh",
        })
    }

    useEffect(initViz, []);

    return (
        <div ref={ref} />
    )
}

export default EmbeddedMap;