import React, { useEffect } from "react";
import PendingDoc from "./PendingDoc.js";
import {useState, useRef} from "react";


function PendingSection () {

    // let documentosPendings = [
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     },
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     },
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     }
    // ]

    // let documentosResult = [
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     },
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     },
    //     {
    //         "idDocumento": "3232384",
    //         "idSucursal": 12,
    //         "nombreSucursal": "Belgrano",
    //         "idSocio": "12-623065",
    //         "numeroDoc": "40783520",
    //         "importeTotal": 9890,
    //         "invoicerReference": "a1e36a225303422fbef30d81b6818935-MTItMzIzMjM4NA==",
    //         "dateTime": "2022-10-01 16:01:50",
    //         "status":"Aprobado"
    //     }
    // ]

    let sectionbgc = useRef(null)
    let loading =  useRef(null)
    let resendAll = useRef(null)
    let sectionResult =  useRef(null)
    let loadingResend =  useRef(null)

    


    let [docPendings, setDocPendings] = useState([]);
    let [responseResend, setResponseResend] = useState([]);
    let [status, setStatus] = useState(['Cargando...'])
    let [statusResend, setStatusResend] = useState(['Cargando...']);




        useEffect(() => {
            // setDocPendings(documentosPendings)
            fetch('http://localhost:4600/api/getProcessBySub')
            // fetch('http://localhost:4600/api/getProcessFromProd01')
            .then(response => response.json())
            .then(data => {
                setDocPendings(data.documents); 
                console.log(data.documents);
                if (data.documents.length < 1){
                    setStatus('Sin documentos')
                }
            } )
            .catch(error=> {
                console.log(error);
                setStatus(`No me pude conectar al servidor. (${error})`);
            } )

        }, [])

        // useEffect(() =>{
        //     console.log("Se actualizó el componente");
        // }, [docPendings])



        const resendToMega = async () => {    
            
              // setDocPendings(documentosResult)
            
            sectionbgc.current.style.display="none"
            resendAll.current.style.display = "none"
            loadingResend.current.style.display="flex"

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
              .then(response => response.json())
              .then(result => {
                setResponseResend(result);
                console.log(responseResend);
                loadingResend.current.style.display="none"
              })
              .catch(error=> {
                console.log(error);
                setStatusResend(`No me pude conectar al servidor. (${error} (${error.status}))`);
            } )
        } 


        //Podría agregar al componente un fetch al resend y que muestre los resultados en la misma pantalla.
        //Ver cómo controlar los elementos de JSX con el useRef o lo que sea. 

        

        if(docPendings.length > 0 && responseResend.length < 1){
            sectionbgc.current.style.display="flex"
            resendAll.current.style.display="flex"
            loading.current.style.display="none"            
        }

        if (responseResend.length > 0){
            sectionResult.current.style.display="flex"
            sectionResult.current.style.flexWrap = "wrap"
            sectionResult.current.style.margin = "15%"
            sectionbgc.current.style.display="none"
            resendAll.current.style.display="none"
        }          


    return(
        <>        
        <h1 ref={loading} style={{display:"flex"}}>{status}</h1>
        <section ref={sectionbgc} style={{display:"none"}} className="section section-bgc">
            <div className="container">
                <div className="row items">
                    <div className="col-12">
                        <div className="section-heading heading-center">
                            <div className="section-subheading"></div>
                            <h2>Reenvío General</h2>
                        </div>
                    </div>                                                                                                 
                            
                        { docPendings.map(doc => <PendingDoc nombreSucursal={doc.nombreSucursal}  idSucursal={doc.idSucursal} idDocumento={doc.idDocumento} idSocio={doc.idSocio} numeroDoc={doc.numeroDoc} importeTotal={doc.importeTotal} dateTime={doc.dateTime} status={"Pendiente"} invoicerReference={doc.invoicerReference}/>)
                        }

                    </div>
                </div>            
        </section>


        <section ref={resendAll} style={{display:"none"}} className="section">
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
            </div>                    
        </div>           
        </section>	

        <div ref={loadingResend} style={{display:"none"}}>
        <h1>{statusResend}</h1>  
        </div>

        <section ref={sectionResult} style={{display:"none"}}>            

        { responseResend.map(doc => <PendingDoc nombreSucursal={doc.nombreSucursal}  idSucursal={doc.idSucursal} idDocumento={doc.idDocumento} idSocio={doc.idSocio} numeroDoc={doc.numeroDoc} importeTotal={doc.importeTotal} dateTime={doc.dateTime} status={doc.status}/>)}

        </section>

    </>



    )
}


export default PendingSection;