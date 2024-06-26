import { } from 'react';
import { useSelector } from 'react-redux';
import { CardComponent } from './CardComponent';
import { LoadingDatosScreen } from '../loading/LoadingDatosScreen';

export const ContentComponent = () => {

    const { data, isLoading } = useSelector( state => state.data );

    console.log( 'data', data );

    return (
        <div className="container">
            {
                isLoading
                    ?
                    <LoadingDatosScreen />
                    :
                    data.map( ( ele, key ) => {
                        return (
                            <div key={ 'group-zone-' + key } className="offers">
                                <span className="title-card">{ ele.zone }</span>
                                <hr />
                                <div className="row">
                                    {
                                        ele.centers.map( ( ele, key ) => ( <CardComponent key={ 'card-item-' + key } { ...ele } /> ) )
                                    }

                                </div>
                            </div>
                        )
                    } )
            }
        </div>
    )
}
