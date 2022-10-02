import React from "react";
import {Link} from 'react-router-dom'


function Services (){
    return(
        <section className="section services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading heading-center">
                            <div className="section-subheading">Seleccione una Opción</div>
                            <h2>Reenvío de Facturas</h2>
                        </div> 
                    </div>
                    <div className="col-lg-6 col-md-3 col-12 item">
                        <Link to="/resendPage" className="iitem item-style">
                            <div className="iitem-icon">
                                <i className="material-icons material-icons-outlined md-48">receipt_long</i>
                            </div>
                            <div className="iitem-icon-bg">
                                <i className="material-icons material-icons-outlined">receipt_long</i>
                            </div>
                            <h3 className="iitem-heading item-heading-large">Facturas en Proceso</h3>
                            <div className="iitem-desc">Reenvío de Facturas en estado PROCESANDO</div>
                        </Link>    
                    </div>
                    <div className="col-lg-6 col-md-3 col-12 item">
                        <Link to="#" className="iitem item-style">
                            <div className="iitem-icon">
                                <i className="material-icons material-icons-outlined md-48">receipt</i>
                            </div>
                            <div className="iitem-icon-bg">
                                <i className="material-icons material-icons-outlined">receipt</i>
                            </div>
                            <h3 className="iitem-heading item-heading-large">Facturas en Error</h3>
                            <div className="iitem-desc">Próximamente</div>
                        </Link>
                    </div>                      
                    </div>
                </div>    
        </section>
    )
}

export default Services