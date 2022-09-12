import React, { useRef, useEffect } from 'react';

const TABLEAU_MAP_URL = 'https://public.tableau.com/views/maps_16611808858560/Sheet1';

declare global {
    interface Window {
        tableau: any;
    }
}

function EmbeddedMap() {
    const ref = useRef(null);

    const initViz = () => {
        new window.tableau.Viz(ref.current, TABLEAU_MAP_URL, {
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