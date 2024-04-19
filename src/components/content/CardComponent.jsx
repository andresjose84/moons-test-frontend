import { } from 'react';

// eslint-disable-next-line react/prop-types
export const CardComponent = ( { Center_Name, Center_Type, Promo, Direccion, Horario } ) => {
    return (
        <div className="col-md-4">
            <div className="offer">
                <img
                    src="https://moons-website-assets.s3.amazonaws.com/assets/images/moons.svg"
                    alt="Moons"
                    className="offer-image"
                />

                <div className="offer-text">
                    <div className="offer-city">{ Center_Name }</div>
                    { Promo ? <div className="offer-promo">{ Promo }</div> : '' }
                    <div className="offer-direccion">{ Direccion }</div>
                    <div className="offer-location">{ Center_Type }</div>
                    <div className="offer-hours">{ Horario }</div>
                </div>
            </div>
        </div>
    )
}
