import React from "react";
import {Link} from "react-router-dom"

// MANDAR DESDE LAS PROPS UN ARRAY CON LAS RUTAS E ITERARLO:
//<Link to={props.currentPath}>{props.currentPage}</Link>

function BreadCrumbs (props) {
    return (
        <nav className="bread-crumbs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="bread-crumbs-list">
                            <li>
                                <Link to="/">Home</Link>
                                <i className="material-icons md-18">chevron_right</i>
                            </li>
                            <li>
                                <Link to="/resendPage">Reenvíos</Link>
                                <i className="material-icons md-18">chevron_right</i>
                            </li>						 		
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default BreadCrumbs;

