import { } from 'react';
import { FiltersComponent } from '../filters/FiltersComponent';
import { useDispatch } from 'react-redux';
import { getDatos } from '../../store/slices/data/thunks';

export const HeaderComponent = () => {

    const dispatch = useDispatch();

    const handlerClick = e => {
        e.preventDefault();
        dispatch( getDatos() );
    };

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Moons Smile Centers</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <FiltersComponent />
                <div className="row">
                    <button
                        type="button"
                        className="btn btn-primary mt-4 ml-3"
                        data-bs-toggle="button"
                        aria-pressed="false"
                        onClick={ handlerClick }
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}
