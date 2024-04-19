import { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectService, setSelectType, setSelectZone } from '../../store/slices/filters/filtersSlice';

export const FiltersComponent = () => {

    const dispatch = useDispatch();

    const {
        types,
        zones,
        services
    } = useSelector( state => state.filters );

    const handlerZones = e => {
        e.preventDefault();
        dispatch( setSelectZone( e.target.value ) );
    };
    const handlerTypes = e => {
        e.preventDefault();
        dispatch( setSelectType( e.target.value ) );
    };
    const handlerServices = e => {
        e.preventDefault();
        dispatch( setSelectService( e.target.value ) );
    };

    const formatOption = ( string ) => {
        const option = string.replace( '_', ' ' ).toLowerCase()
        return option.charAt( 0 ).toUpperCase() + option.slice( 1 );
    }

    return (
        <div className="row">
            <div className="col-md-4 mt-2">
                Zona
                <select className="form-control" onChange={ handlerZones }>
                    <option value="">Seleccione</option>
                    {
                        zones.map( ( ele, key ) => {
                            return ( <option key={ 'zona-item-' + key } value={ ele }>{ formatOption( ele ) }</option> )
                        } )
                    }
                </select>
            </div>

            <div className="col-md-4 mt-2">
                Servicios
                <select className="form-control" onChange={ handlerServices }>
                    <option value="">Seleccione</option>
                    {
                        services.map( ( ele, key ) => {
                            return ( <option key={ 'service-item-' + key } value={ ele }>{ formatOption( ele ) }</option> )
                        } )
                    }
                </select>
            </div>

            <div className="col-md-4 mt-2">
                Centros
                <select className="form-control" onChange={ handlerTypes }>
                    <option value="">Seleccione</option>
                    {
                        types.map( ( ele, key ) => {
                            return ( <option key={ 'type-item-' + key } value={ ele }>{ ele }</option> )
                        } )
                    }
                </select>
            </div>
        </div>
    )
}
