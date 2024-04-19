import { fetchApi } from "../../../apis/fetchApi";
import { setFilters } from "./filtersSlice";

export const getInitFilters = () => {
    return async ( dispatch ) => {
        try {

            const { data } = await fetchApi.get( `/api/v1/init` );

            if ( data ) {
                dispatch( setFilters( data ) );
            }

        } catch ( error ) {
            console.log( 'error filter fetch', error );
        }
    }
};