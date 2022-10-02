import React from 'react'
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="row items">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-12 item">
                            {/* Begin company info */}
                            <div className="footer-company-info">
                                <div className="footer-company-top">
                                    <a href="/" className="logo" title="PathSoft">
                                        <img data-src="/img/resender.png" width="115" height="36" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="PathSoft"/>
                                    </a>
                                    <div className="footer-company-desc">
                                        <p>by Leonardo Torrealba - 2022</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* End company info */}
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-3 col-5 col-lg-2 item">
                            <div className="footer-item">
                                <p className="footer-item-heading">Menu</p>
                                <nav className="footer-nav">
                                    <ul className="footer-mnu">
                                        <li><Link to="/resendPage" className="hover-link" data-title="Facturas Procesando"><span>Facturas Procesando</span></Link></li>
                                        <li><Link to="#" className="hover-link" data-title="Facturas en Error"><span>Facturas en Error</span></Link></li>
                                        {/* <li><Link to="typography.html" data-title="Typography"><span>Typography</span></Link></li>
                                        <li><Link to="news.html" className="hover-link" data-title="News"><span>News</span></Link></li>
                                        <li><Link to="contact-us.html" className="hover-link" data-title="Contact Us"><span>Contact Us</span></Link></li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>                
                        <div className="col-xs-4 col-lg-4 col-12 item">
                            <div className="footer-item">
                                <p className="footer-item-heading">Our contacts</p>
                                <ul className="footer-contacts">
                                    <li>
                                        <i className="material-icons md-22">location_on</i>
                                        <div className="footer-contact-info">
                                            Húsares 1984, PB, Oficina de Mati, CABA
                                        </div>
                                    </li>
                                    <li>
                                        <i className="material-icons md-22 footer-contact-tel">smartphone</i>
                                        <div className="footer-contact-info">
                                            <a href="https://wa.me/5491167211569" className="formingHrefTel">1167211569</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="material-icons md-22 footer-contact-email">email</i>
                                        <div className="footer-contact-info">
                                            <a href="mailto:ltorrealba@megatlon.com.ar">ltorrealba@megatlon.com.ar</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                                </div>
                            </div>
                        </div>
                    </div> 
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-between items">
                        <div className="col-md-auto col-12 item">
                            <nav className="footer-links">
                                <ul>
                                    <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-auto col-12 item">
                            <div className="copyright">© 2022 Leonardo Torrealba. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>        
         )

    }


export default Footer;