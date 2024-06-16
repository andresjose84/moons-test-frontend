import { fetchApi } from '../../../apis/fetchApi';
import { setFilters } from '../filters/filtersSlice';
import { setDatos, startDatos, stopLoading } from './dataSlice';

export const getDatosInit = () => {
    return async ( dispatch ) => {
        console.log( 'Fetch data' );
        dispatch( startDatos() );
        try {
            const res = await Promise.all( [
                fetchApi.get( `/smilecenters` ),
                fetchApi.get( `/smilecenters/init` )
            ] );
            const { data } = res[ 0 ];
            const { data: filters } = res[ 1 ];

            console.log( 'data', {
                data,
                filters
            } );

            if ( data ) {
                dispatch( setDatos( data ) );
                dispatch( setFilters( filters ) );
            } else {
                dispatch( stopLoading() );
            }

        } catch ( error ) {
            console.log( 'error fetch datos' );
            dispatch( stopLoading() );
        }
    }
};

export const getDatos = () => {
    return async ( dispatch, getState ) => {
        console.log( 'Fetch data' );
        dispatch( startDatos() );
        try {

            const {
                filters: {
                    selected: {
                        types,
                        zones,
                        services
                    }
                }
            } = getState();

            const searchParams = new URLSearchParams();

            if ( types !== '' )
                searchParams.append( 'center_type', types );

            if ( zones !== '' )
                searchParams.append( 'zone', zones );

            if ( services !== '' )
                searchParams.append( 'services', services );

            const res = await fetchApi.get( `/smilecenters?${ searchParams.toString() }` );
            const { data } = res;

            if ( data ) {
                dispatch( setDatos( data ) );
            } else {
                dispatch( stopLoading() );
            }

        } catch ( error ) {
            console.log( 'error fetch datos' );
            dispatch( stopLoading() );
        }
    }
}