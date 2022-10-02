import React from "react"
import { Link } from "react-router-dom";

function Header(){
    return (
        
<div className="main-inner">

{/* Begin mobile main menu */}
<nav className="mmm">
<div className="mmm-content">
<ul className="mmm-list">
<li><Link to="/">Home</Link></li>
<li><Link to="/resendPage">Facturas Procesando</Link></li>
<li><Link to="#">Facturas en Error</Link></li>
<li><Link to="#">Definiciones e Instructivos</Link></li>
{/* <li><Link to="#">Tabs Accordions</Link></li> */}
<li><Link to="#">Novedades</Link></li>
<li><Link to="#">Contacto</Link></li>
</ul>
</div>
<div className="mmm-footer">
<ul className="mmm-lang">
<li className="active"><Link to="#!"><span>En</span></Link></li>
<li><Link to="#!"><span>Sp</span></Link></li>
<li><Link to="#!"><span>It</span></Link></li>
<li><Link to="#!"><span>Uk</span></Link></li>
<li><Link to="#!"><span>Ru</span></Link></li>
</ul>
</div>
</nav>{/* End mobile main menu */}



{/* Begin header */}
<header className="header">
{/* Begin header top */}
<nav className="header-top">
<div className="container">
<div className="row align-items-center justify-content-between">
    <div className="col-auto">
        {/* Begin header top info */}
        <ul className="header-top-info">
            <li>
                <Link to="mailto:ltorrealba@megatlon.com.ar">
                    <i className="material-icons md-18">mail_outline</i>
                    <span>ltorrealba@megatlon.com.ar</span>
                </Link>
            </li>
            <li>
                <a href="https://wa.me/5491167211569" target="_blank" className="formingtoTel">
                    <i className="material-icons md-18">whatsapp</i>
                    <span>Whatsapp a Desarrollo</span>
                </a>
            </li>
        </ul>{/* Ennd header top info */}
    </div>
    <div className="col-auto">
        <div className="header-top-links">
            {/* Begin social links */}
            <ul className="social-links">
                <li>
                    <Link to="#!" title="Facebook">
                        <svg viewBox="0 0 320 512"><use xlinkto="/img/sprite.svg#facebook-icon"></use></svg>
                    </Link>
                </li>
                <li>
                    <Link to="#!" title="Instagram">
                        <svg viewBox="0 0 448 512"><use xlinkto="/img/sprite.svg#instagram-icon"></use></svg>
                    </Link>
                </li>
                <li>
                    <Link to="#!" title="LinkedIn">
                        <svg viewBox="0 0 448 512"><use xlinkto="/img/sprite.svg#linkedin-icon"></use></svg>
                    </Link>
                </li>
                <li>
                    <Link to="#!" title="Twitter">
                        <svg viewBox="0 0 512 512"><use xlinkto="/img/sprite.svg#twitter-icon"></use></svg>
                    </Link>
                </li>
            </ul>{/* End social links */}
        </div>
    </div>
</div>
</div>
</nav>{/* End header top */}
{/* Begin header fixed */}
<nav className="header-fixed">
<div className="container">
<div className="row flex-nowrap align-items-center justify-content-between">
    <div className="col-auto d-block d-lg-none header-fixed-col">
        <div className="main-mnu-btn">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
            <span className="bar bar-4"></span>
        </div>
    </div>
    <div className="col-auto header-fixed-col">
        {/* Begin logo */}
        <Link to="/" className="logo" title="PathSoft">
            <img src="/img/resender.png" width="400" height="200" alt="PathSoft"/>
        </Link>{/* End logo */}
    </div>
    <div className="col-auto header-fixed-col d-none d-lg-block col-static">
        {/* Begin main menu */}
<nav className="main-mnu">
<ul className="main-mnu-list">
<li><Link to="/" data-title="Inicio"><span>Inicio</span></Link></li>
<li><Link to="/resendPage" data-title="Facturas Procesando"><span>Facturas Procesando</span></Link></li>
<li><Link to="#" data-title="Facturas en Error"><span>Facturas en Error</span></Link></li>
<li><Link to="#" data-title="Definiciones e Instructivos"><span>Definiciones e Instructivos</span></Link></li>
<li><Link to="#" data-title="Novedades"><span>Novedades</span></Link></li>
<li><Link to="#" data-title="Contacto"><span>Contacto</span></Link></li>
</ul>

</nav>{/* End main menu */}
    </div>
    <div className="col-auto header-fixed-col col-static">
        {/* Begin header actions */}
        <ul className="header-actions">
            {/* Begin header languarge */}
            <li className="d-none d-lg-block">
                <div className="header-lang">
                    <div className="header-lang-current"><i className="material-icons md-22">language</i></div>
                    <ul className="header-lang-list">
                        <li className="active"><Link to="#!" className="hover-link" data-lang="En" data-title="English"><span>English</span></Link></li>
                        <li><Link to="#!" className="hover-link" data-lang="Sp" data-title="Spanish"><span>Spanish</span></Link></li>
                        <li><Link to="#!" className="hover-link" data-lang="It" data-title="Italian"><span>Italian</span></Link></li>
                        <li><Link to="#!" className="hover-link" data-lang="Uk" data-title="Ukraine"><span>Ukraine</span></Link></li>
                        <li><Link to="#!" className="hover-link" data-lang="Ru" data-title="Russian"><span>Russian</span></Link></li>
                    </ul>
                </div>
            </li>{/* End header languarge */}
            {/* Begin header navbar */}
            <li className="d-block d-lg-none">
                <div className="header-navbar">
                    <div className="header-navbar-btn">
                        <i className="material-icons md-24">more_vert</i>
                    </div>
                    <ul className="header-navbar-content">
                        <li>
                            <Link to="mailto:ltorrealba@megatlon.com.ar">
                                <i className="material-icons md-18">mail_outline</i>
                                <span>ltorrealba@megatlon.com.ar</span>
                            </Link>
                        </li>
                        <li>
                            <a target="_blank" href="https://wa.me/5491167211569" className="formingtoTel">
                                <i className="material-icons md-18">whatsapp</i>
                                <span>Whatsapp a Desarrollo</span>
                            </a>
                        </li>
                        <li>
                            {/* Begin social links */}
                            <ul className="social-links">
                                <li>
                                    <Link to="#!" title="Facebook">
                                        <svg viewBox="0 0 320 512"><use xlinkto="/img/sprite.svg#facebook-icon"></use></svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Instagram">
                                        <svg viewBox="0 0 448 512"><use xlinkto="/img/sprite.svg#instagram-icon"></use></svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="LinkedIn">
                                        <svg viewBox="0 0 448 512"><use xlinkto="/img/sprite.svg#linkedin-icon"></use></svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Twitter">
                                        <svg viewBox="0 0 512 512"><use xlinkto="/img/sprite.svg#twitter-icon"></use></svg>
                                    </Link>
                                </li>
                            </ul> {/* End social links */}
                        </li>
                    </ul>
                </div>
            </li>{/* End header navbar */}
        </ul>{/* End header actions */}
    </div>
</div>
</div>
</nav>{/* End header fixed */}
</header>{/* End header */}
</div>
    )
}


export default Header;