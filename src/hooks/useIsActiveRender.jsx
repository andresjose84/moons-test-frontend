import { useEffect, useState } from "react";
import { fetchApi } from "../apis/fetchApi";
import Swal from "sweetalert2";

export const useIsActiveRender = () => {
    const [ isActive, setIsActive ] = useState( null );

    useEffect( () => {
        const checkBackendStatus = async () => {
            try {
                const res = await fetchApi.get(`/smilecenters/status`);
                setIsActive( res.status === 200 ); // Update isActive based on API response
            } catch ( error ) {
                setIsActive( false ); // Set isActive to false if API request fails
            }
        };

        // Initial check on component mount
        checkBackendStatus();

        // Interval to periodically check backend status
        const interval = setInterval( checkBackendStatus, 10000 );

        // Clean up interval on component unmount
        return () => clearInterval( interval );
    }, [] );

    useEffect( () => {
        console.log( 'IsActive', isActive );
        if ( !isActive ) {
            // Show alert if backend is down
            if ( isActive != null )
                Swal.fire( {
                    title: "Something went wrong",
                    text:
                        "Sorry, the backend is not available. Please wait a moment while the backend is restored.",
                    icon: "warning",
                } );
        } else {
            // Close alert if backend is up
            Swal.close();
        }
    }, [ isActive ] );

    return { isActive };
};
