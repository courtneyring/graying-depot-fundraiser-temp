'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { isMobile } from '@/utils/breakpoints';
import useResizeResponsive from '@/hooks/useResponsive';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({children, className}) => {
    const isMobileWidth = useResizeResponsive(isMobile);
    const node = useRef();
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to(node.current, {
                opacity: 1,
                y: '0',
                duration: 0.5,
                scrollTrigger: {
                    trigger: node.current,
                    start: isMobile ? 'top center' : 'top top-+=20%',
                },
            });
        });

        return () => {
            return () => ctx.revert();
     
        }
    },[])

    return (
        <div ref={node} className={`opacity-0 translate-y-2 ${className}`}>
            {children}
        </div>
    )

}


export default FadeIn;