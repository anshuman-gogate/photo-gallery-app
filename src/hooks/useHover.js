import { useState , useRef , useEffect } from 'react';

function useHover() {
    const [hovered , setHovered] = useState(false);
    const ref = useRef(null);

    // Function to set hovered to true
    function enter() {
        setHovered(true);
    }
    // Function to set hovered to false
    function leave() {
        setHovered(false);
    }

    useEffect( () => {
        const node = ref.current;

        node.addEventListener("mouseenter" , enter);
        node.addEventListener("mouseleave" , leave);

        // If we return a function in useEffect it is treated as function for cleanup
        return function removeEventListeners() {
            node.removeEventListener("mouseenter" , enter);
            node.removeEventListener("mouseleave" , leave);
        }
    } , [] )

    return [hovered, ref];
}

export {useHover}