import React from 'react'

function Footer () {
    return (
        <footer class="footer">
            <div class="footer-main">
                <div class="container">
                    <div class="row items">
                        <div class="col-xl-3 col-lg-3 col-md-5 col-12 item">
                            {/* Begin company info */}
                            <div class="footer-company-info">
                                <div class="footer-company-top">
                                    <a href="/" class="logo" title="PathSoft">
                                        <img data-src="/img/resender.png" width="115" height="36" class="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="PathSoft"/>
                                    </a>
                                    <div class="footer-company-desc">
                                        <p>by Leonardo Torrealba - 2022</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* End company info */}
                        </div>
                        <div class="col-xl-2 offset-xl-1 col-md-3 col-5 col-lg-2 item">
                            <div class="footer-item">
                                <p class="footer-item-heading">Menu</p>
                                <nav class="footer-nav">
                                    <ul class="footer-mnu">
                                        <li><a href="about-us.html" class="hover-link" data-title="About Us"><span>About Us</span></a></li>
                                        <li><a href="services.html" class="hover-link" data-title="Services"><span>Services</span></a></li>
                                        <li><a href="typography.html" data-title="Typography"><span>Typography</span></a></li>
                                        <li><a href="news.html" class="hover-link" data-title="News"><span>News</span></a></li>
                                        <li><a href="contact-us.html" class="hover-link" data-title="Contact Us"><span>Contact Us</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>                
                        <div class="col-xs-4 col-lg-4 col-12 item">
                            <div class="footer-item">
                                <p class="footer-item-heading">Our contacts</p>
                                <ul class="footer-contacts">
                                    <li>
                                        <i class="material-icons md-22">location_on</i>
                                        <div class="footer-contact-info">
                                            Húsares 1984, PB, Oficina de Mati, CABA
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons md-22 footer-contact-tel">smartphone</i>
                                        <div class="footer-contact-info">
                                            <a href="#!" class="formingHrefTel">1167211569</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons md-22 footer-contact-email">email</i>
                                        <div class="footer-contact-info">
                                            <a href="mailto:mail@example.com">ltorrealba@megatlon.com.ar</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                                </div>
                            </div>
                        </div>
                    </div> 
            
            <div class="footer-bottom">
                <div class="container">
                    <div class="row justify-content-between items">
                        <div class="col-md-auto col-12 item">
                            <nav class="footer-links">
                                <ul>
                                    <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-md-auto col-12 item">
                            <div class="copyright">© 2022 Leonardo Torrealba. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>        
         )

    }


export default Footer;