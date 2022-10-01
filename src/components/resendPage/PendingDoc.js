import React from "react";
import {Link} from "react-router-dom"

function PendingDoc (props) {

    let resendTo = "resendDocument/" + props.invoicerReference


    return(
    <div className="col-lg-4 col-md-6 col-12 item">
    <div className="pricing-item item-style">
        <header className="pricing-item-header">
            <div className="pricing-item-heading">Reenvío</div>
            <div className="pricing-item-price">{props.nombreSucursal} ({props.idSucursal}) </div>
        </header>
        <div className="pricing-item-h">
            <div className="pricing-item-content">
                <ul className="pricing-item-list">
                    <li className="active">
                    <i className="material-icons md-24">receipt</i>
                        Factura: <strong>{props.idSucursal}-{props.idDocumento} </strong>
                    </li>							
                    <li className="active">
                    <i className="material-icons md-24">how_to_reg</i>
                        ID Socio: <strong>{props.idSocio}</strong>
                    </li>					
                    <li className="active">
                        <i className="material-icons md-24">badge</i>
                        DNI Socio:<strong>{props.numeroDoc} </strong>
                    </li>			
                    <li className="active">
                        <i className="material-icons md-24">paid</i>
                            <strong>{props.importeTotal}</strong>
                    </li>											
                    <li className="active">
                        <i className="material-icons md-24">event</i>
                            <strong>{props.dateTime}</strong>
                    </li>						
                </ul>
            </div>
            <footer className="pricing-item-footer">
                <Link to={resendTo} className="btn btn-large btn-with-icon btn-wide ripple">
                    <span>Enviar</span>
                    <svg className="btn-icon-right" viewBox="0 0 13 9" width="13" height="9"><use xlinkHref="/img/sprite.svg#arrow-right"></use></svg>
                </Link>
            </footer>
        </div>
    </div>
    </div>
    )
}

export default PendingDoc