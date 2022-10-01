import React, { useEffect } from "react";
import PendingDoc from "./PendingDoc";
import {useState, useRef} from "react";



function PendingSection () {

    let [docPendings, setDocPendings] = useState([]);
    let [responseResend, setResponseResend] = useState([]);


        useEffect(() => {
            fetch('http://localhost:4600/api/getProcessBySub')
            // fetch('http://localhost:4600/api/getProcessFromProd01')
            .then(response => response.json())
            .then(data => {
                setDocPendings(data.documents);                
            } )
            .catch(error => console.log(error))

        }, [])

        useEffect(() =>{
            console.log("Se actualizó el componente");
        }, [docPendings])



        const resendToMega = async () => {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify(docPendings);
            
            var requestOptions = {
              method: 'POST',
            //   mode: 'no-cors',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("http://localhost:4600/api/resendToMega", requestOptions)
              .then(response => response.text())
              .then(result => {
                setResponseResend(result);
                console.log(responseResend);
              })
              .catch(error => console.log('error', error));
        } 


        //Podría agregar al componente un fetch al resend y que muestre los resultados en la misma pantalla.
        //Ver cómo controlar los elementos de JSX con el useRef o lo que sea. 

        let sectionbgc = useRef(null)
        let loading =  useRef(null)
        let pResend =  useRef(null)

        if(docPendings.length > 1){
            sectionbgc.current.style.display="block"
            loading.current.style.display="none"
        }

        if (responseResend.length > 1){
            pResend.current.style.display="block"
        }
    

        

           


    return(
        <>        
        <h1 ref={loading} style={{display:"block"}}>Cargando...</h1>
        <section ref={sectionbgc} style={{display:"none"}} className="section section-bgc">
            <div className="container">
                <div className="row items">
                    <div className="col-12">
                        <div className="section-heading heading-center">
                            <div className="section-subheading"></div>
                            <h2>Reenvío General</h2>
                        </div>
                    </div>                                                                                                 
                            
                        { docPendings.map(doc => <PendingDoc nombreSucursal={doc.nombreSucursal}  idSucursal={doc.idSucursal} idDocumento={doc.idDocumento} idSocio={doc.idSocio} numeroDoc={doc.numeroDoc} importeTotal={doc.importeTotal} dateTime={doc.dateTime} /> )
                        }                           
                                
                    </div>  
                </div>            
        </section>


        <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading heading-center">
                        <div className="section-subheading">¿Hay pendientes?</div>
                        <h2>Presione para reenviar todos</h2>
                    </div>
                    <span onClick={resendToMega} className="btn btn-large btn-with-icon btn-wide ripple">
                        <span> Reenviar Todos</span>                      
                        <svg className="btn-icon-right" viewBox="0 0 13 9" width="6.5" height="4.5"><use xlinkHref="/img/sprite.svg#arrow-right"></use></svg>
                    </span>
                    </div>
                    <p ref={pResend} style={{display:"none"}}>{responseResend}</p>
                </div>                    
            </div>           
        </section>	
    </>



    )
}


export default PendingSection;