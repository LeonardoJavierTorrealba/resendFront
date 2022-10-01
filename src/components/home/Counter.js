import React, { useEffect } from "react";
import {useState,useRef} from 'react';


function Counter () {

    const [pendings, setPendings] = useState([])
    const [totalSub, setTotalSub] = useState([])
    const [status, setStatus] = useState(["Cargando..."])

    useEffect(() => {
        console.log("Montando el componente");
        fetch('http://localhost:4600/api/getProcessBySub')
        .then(response => response.json())
        .then(data => {
            setPendings(data.documents);
            if(data.documents.length < 1){
                setStatus('Sin documentos para reenviar')
            }
        } )
        .catch(error => console.log(error))

        
    }, []);

    useEffect(() => {
        console.log("Update Component");
    }, [pendings]);
  


     console.log(pendings);   

    for(let subPen of pendings){
        if(totalSub.indexOf(subPen.idSucursal) === -1){
            setTotalSub([...totalSub, subPen.idSucursal])
            console.log(totalSub);
        }
    }


    let sectionbgc = useRef(null)
    let cargando =  useRef(null)

    useEffect(() => {
        if(pendings.length > 1){
            sectionbgc.current.style.display="block"
            cargando.current.style.display="none"
        }
    
    })    

    // else{
    //     cargando.current.innerText = 'Por fin, sin documentos'
    // }
        

    //spinner-border
    



    return (  
        <>        
        <h1 ref={cargando} style={{display:"block"}}>{status}</h1>
        <section ref={sectionbgc} style={{display:"none"}} className="section">            
        <div className="container">
            <div className="row spincrement-container">
                <div className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-12">
                    <div className="main-counter">
                        <div className="main-counter-item">
                            <div className="main-counter-item-center">
                                <div>                            
                                    <div className="main-counter-numb spincrement" data-from="0" data-to="100">{totalSub.length}</div>
                                    <div className="main-counter-heading">Sedes con <br/> incovenientes </div>
                                </div>
                            </div>
                            <div className="main-counter-item-circ"></div>
                        </div>
                    </div>
                </div> 
                <div className="col-xl-4 offset-xl-1 col-lg-3 offset-lg-1 col-12 counter-items items">
                    <div className="counter-item item">
                        <div className="counter-item-numb"><span className="spincrement" data-from="0" data-to="200">{pendings.length}</span></div>
                        <p className="counter-item-heading">Facturas Procesando</p>
                    </div>
                    <div className="counter-item item"> 
                        <div className="counter-item-numb spincrement" data-from="0" data-to="0">0</div>
                        <p className="counter-item-heading">Facturas en Error (en construcción)</p>
                    </div>
                    <div className="counter-item item">
                        <div className="counter-item-numb spincrement" data-from="0" data-to="0">0</div>
                        <p className="counter-item-heading">Facturas Pendientes (en construcción)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

)
}

export default Counter;


