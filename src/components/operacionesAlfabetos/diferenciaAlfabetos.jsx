import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

import { diferenciaAlfabetos , imprimirAlfabetoFormateado } from '../../modules/modulo1';

const DiferenciaAlfabetos = ({alfabetos}) => {

    const [nombresDeAlfabetosSeleccionados,setNombresDeAlfabetosSeleccionados] = useState([]);
    const [salida,setSalida] = useState([]);

    useEffect(()=>{
        trabajandoSalida();
    },[nombresDeAlfabetosSeleccionados])

    const trabajandoSalida = () => {
        // console.log(nombresDeLenguajesSeleccionados);
        if(nombresDeAlfabetosSeleccionados.length !== 0){

            var vecls = [];
            for(let i=0 ; i < nombresDeAlfabetosSeleccionados.length ; i++){
                let elemento = alfabetos.filter( e => e.nameAlfabeto === nombresDeAlfabetosSeleccionados[i]);
                vecls.push(elemento[0]);
            }
            
            setSalida(diferenciaAlfabetos(vecls));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        let nombresAlfabetosSeleccionados = [];
        for (let i=0 ; i < 2 ; i++) {
            let elemento = document.getElementById(`alfabeto${i+1}`);
            if(elemento != null){
                nombresAlfabetosSeleccionados.push(elemento.value);
            }
            else console.log("no hay nada seleccionado");
        }
        console.log(nombresAlfabetosSeleccionados);
        if(nombresAlfabetosSeleccionados[0] !== "Alfabeto..."){
            if(nombresAlfabetosSeleccionados[1] !== "Alfabeto..."){
                setNombresDeAlfabetosSeleccionados(nombresAlfabetosSeleccionados);
            }
            else{
                alert("En la operación diferencia es necesario\nque seleccione dos alfabetos:\npor favor escoja el alfabeto 2");
            }
        }
        else{
            alert("En la operación diferencia es necesario\nque seleccione dos alfabetos:\npor favor escoja el alfabeto 1");
        }

    }

    const mostrarBarrasDeSeleccion = () => {
        //rebusque jajaja
        let vector = [];
        for (let i=0 ; i < 2 ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`alfabeto${i+1}`}>Selecciona el lenguaje {`${i+1}`}</label>
                <select id={`alfabeto${i+1}`} className="form-control">
                    <option>Alfabeto...</option>
                    {alfabetos.map(a => <option key={a.nameAlfabeto}>{a.nameAlfabeto}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Diferencia entre alfabetos</h3>

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
    alfabetos: state.listAlfabetos
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(DiferenciaAlfabetos);