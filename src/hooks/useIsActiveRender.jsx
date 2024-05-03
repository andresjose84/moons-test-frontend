import { useEffect, useState } from "react";
import { fetchTest } from "../apis/fetchApi";
import Swal from "sweetalert2";

export const useIsActiveRender = ( active ) => {
    const [ isActive, setIsActive ] = useState( active );

    useEffect( () => {
        const checkBackendStatus = async () => {
            try {
                const res = await fetchTest.get();
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
        if ( !isActive ) {
            // Show alert if backend is down
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
