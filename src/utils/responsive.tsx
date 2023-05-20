import { useState, useEffect } from 'react';


export const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        setIsMobile(
            Boolean(
                userAgent.match(
                    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
                )
            )
        );
    }, []);

  return { isMobile };
};