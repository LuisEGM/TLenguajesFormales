import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

import { interseccionLenguajes, imprimirAlfabetoFormateado } from '../../modules/modulo1';

const InterseccionLenguajes = ({lenguajes}) => {

    const [nombresDeLenguajesSeleccionados,setNombresDeLenguajesSeleccionados] = useState([]);
    const [salida,setSalida] = useState([]);

    useEffect(()=>{
        trabajandoSalida();
    },[nombresDeLenguajesSeleccionados])

    const trabajandoSalida = () => {
        // console.log(nombresDeLenguajesSeleccionados);
        if(nombresDeLenguajesSeleccionados.length !== 0){

            var vecls = [];
            for(let i=0 ; i < nombresDeLenguajesSeleccionados.length ; i++){
                let elemento = lenguajes.filter( e => e.nameLenguaje === nombresDeLenguajesSeleccionados[i]);
                vecls.push(elemento[0]);
            }
            
            setSalida(interseccionLenguajes(vecls));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        let nombresLenguajesSeleccionados = [];
        for (let i=0 ; i < 2 ; i++) {
            let elemento = document.getElementById(`lenguaje${i+1}`);
            if(elemento != null){
                nombresLenguajesSeleccionados.push(elemento.value);
            }
            else console.log("no hay nada seleccionado");
        }
        
        console.log(nombresLenguajesSeleccionados);
        if(nombresLenguajesSeleccionados[0] !== "Lenguaje..."){
            if(nombresLenguajesSeleccionados[1] !== "Lenguaje..."){
                setNombresDeLenguajesSeleccionados(nombresLenguajesSeleccionados);
            }
            else{
                alert("En la operación intersección de lenguajes es necesario\nque seleccione dos lenguajes:\npor favor escoja el lenguaje 2");
            }
        }
        else{
            alert("En la operación intersección de lenguajes es necesario\nque seleccione dos lenguajes:\npor favor escoja el lenguaje 1");
        }

    }

    const mostrarBarrasDeSeleccion = () => {
        //rebusque jajaja
        let vector = [];
        for (let i=0 ; i < 2 ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`lenguaje${i+1}`}>Selecciona el lenguaje {`${i+1}`}</label>
                <select id={`lenguaje${i+1}`} className="form-control">
                    <option>Lenguaje...</option>
                    {lenguajes.map(e => <option key={e.nameLenguaje}>{e.nameLenguaje}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Intersección entre lenguajes</h3>

            <form onSubmit={handleSubmit}>

                <div className="form-row row-unica">
                    {mostrarBarrasDeSeleccion()}
                </div>

                <div className="col-auto">
                    <button className="btn btn-success boton btn-block">Go</button>
                </div>

            </form>
            <div className="Salida-unica">
                <p>{imprimirAlfabetoFormateado(salida)}</p>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(InterseccionLenguajes);