import { useEffect, useState } from "react"

export const useParallax = ()=>{
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        const handleScroll = () => setScrollY(window.scrollY);

        return () =>  window.removeEventListener("scroll", handleScroll);
        
        
    },[])

    return scrollY;
}