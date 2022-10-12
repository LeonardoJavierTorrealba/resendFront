
import { useRef, useState,useEffect } from "react";

function PendingDoc (props) {

    let [stateDoc, setStateDoc] = useState(props.status);
    let [stateColor, setStateColor] = useState([])

    


    const resendDoc = async () => {

        setStateDoc("Cargando...");        
        // fetch(`http://localhost:4600/api/resendDoc/${props.invoicerReference}`)
        // .then(response => response.text())
        // .then(response => response.text())
        // .then(data => {
        //     setStateDoc(data.status);    
        // } )
        // .catch(error=> {            
        //     setStateDoc(`Error: ${error.message}`);
        // } )

        let responseResend = await fetch(`http://localhost:4600/api/resendDoc/${props.invoicerReference}`)
        try {
        let data = await responseResend.json();
        setStateDoc(data.status);            
        } catch (error) {
            setStateDoc(`Error: ${responseResend.statusText} (${responseResend.status})`);
            window.open(`https://api.whatsapp.com/send/?phone=5491167211569&text="Hola, tuve un error ${responseResend.status} con el documento ${props.idSucursal}-${props.idDocumento}"&type=phone_number`)
        }
    }

    useEffect(() =>{
        switch (stateDoc) {
            case "Aprobado":  setStateColor('#0ced2a'); 
                    console.log("salgo por aprobado");               
                break;
            case "Cargando...":  setStateColor('white');
            console.log("salgo por cargando");                     
                break;
            case 'Pendiente':  setStateColor('yellow');        
            console.log("salgo por pendiente");                             
                break;
            default: setStateColor('red');
            console.log("salgo por otra cosa"); 
            console.log(stateDoc);                   
        }
    }, [stateDoc])   
    

    return(
    <div className="col-lg-4 col-md-6 col-12 item">
    <div className="pricing-item item-style">
        <header className="pricing-item-header">
            <div style={{color: stateColor, backgroundColor: "#186adc"}} className="pricing-item-heading"><strong>{stateDoc}</strong></div>
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
                <span onClick={resendDoc} className="btn btn-large btn-with-icon btn-wide ripple">
                    <span>Enviar</span>
                    <svg className="btn-icon-right" viewBox="0 0 13 9" width="13" height="9"><use xlinkHref="/img/sprite.svg#arrow-right"></use></svg>
                </span>
            </footer>
        </div>
    </div>
    </div>
    )
}

export default PendingDoc