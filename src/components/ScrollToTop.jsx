import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {


        // Scroll to top
        window.scrollTo(0, 0);

        // Refresh ScrollTrigger
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
