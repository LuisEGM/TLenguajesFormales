import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

import { uniondelenguajes, imprimirAlfabetoFormateado } from '../../modules/modulo1';

const UnionLenguajes = ({lenguajes}) => {

    const [numeroDeLenguajes,setNumeroDeLenguajes] = useState(2);
    const [nombresDeLenguajesSeleccionados,setNombresDeLenguajesSeleccionados] = useState([]);
    const [salida,setSalida] = useState([]);

    useEffect(()=>{
        mostrarBarrasDeSeleccion();
    },[numeroDeLenguajes])
    
    useEffect(()=>{
        // console.log(nombresDeLenguajesSeleccionados);
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
            
            setSalida(uniondelenguajes(vecls));
        }
    }

    const handleChange = e => {
        if(e.target.value >= 2){
            // console.log(e.target.value);
            setNumeroDeLenguajes(e.target.value)
        }
        else{
           // console.log(e.target.value);
            setNumeroDeLenguajes(2);            
        }
    }

    const handleSubmit = e => {
        
        e.preventDefault();

        // let elemento = document.getElementById("lenguaje1SU");
        // console.log(elemento.value);

        let nombresLenguajesSeleccionados = [];
        for (let i=0 ; i < numeroDeLenguajes ; i++) {
            let elemento = document.getElementById(`lenguaje${i+1}SU`);
            if(elemento != null){
                nombresLenguajesSeleccionados.push(elemento.value);
            }
            else console.log("no hay nada seleccionado");
        }

        console.log(nombresLenguajesSeleccionados);
        
        var seleccionesCompletas = true
        for(let i=0 ; i < nombresLenguajesSeleccionados.length ; i++){
            if(nombresLenguajesSeleccionados[i] === "Lenguaje..."){
                return seleccionesCompletas = false;
            }
        }
        
        if(seleccionesCompletas) setNombresDeLenguajesSeleccionados(nombresLenguajesSeleccionados);
    }

    const mostrarBarrasDeSeleccion = () => {
        //rebusque jajaja
        let vector = [];
        for (let i=0 ; i < numeroDeLenguajes ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`lenguaje${i+1}SU`}>Selecciona el lenguaje {`${i+1}`}</label>
                <select id={`lenguaje${i+1}SU`} className="form-control">
                    <option>Lenguaje...</option>
                    {lenguajes.map(e => <option key={e.nameLenguaje}>{e.nameLenguaje}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Union entre lenguajes</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-row row-1">
                    <div className="col">
                        <label htmlFor="numerolenguajes">Numero de lenguajes</label>
                        <select onChange={handleChange} id="numerolenguajes" value={numeroDeLenguajes} className="form-control">
                            <option>2</option>
                            {lenguajes.map((e,i) => {if(i>=2){return <option key={i}>{i+1}</option>}})}
                        </select>
                    </div>
                </div>

                <div className="form-row row-2">
                    {mostrarBarrasDeSeleccion()}
                </div>

                <div className="col-auto">
                    <button className="btn btn-success boton btn-block">Go</button>
                </div>

            </form>
            <div className="Salida">
                <p>{imprimirAlfabetoFormateado(salida)}</p>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(UnionLenguajes);