import React, {useState} from 'react';
import {connect} from 'react-redux';

import { potenciaLenguaje, imprimirAlfabetoFormateado } from '../../modules/modulo1';

const PotenciaLenguaje = ({lenguajes}) => {

    const [seleccion,setSeleccion] = useState('Lenguajes...');
    const [potencia,setPotencia] = useState(0);
    const [salida,setSalida] = useState([]);
    const [lenguaje,setLenguaje] = useState({nameLenguaje: '',alfabeto:[]})

    const handleChange = e => {
        // console.log("change => ",e.target.id,e.target.value);

        if(e.target.id === "lenguajeSeleccionado"){    
            if(e.target.value !== 'Lenguajes...'){
                //para que no se quede el resultado anterior
            setSalida([]);
            // console.log("change dentro del if",e.target.value);
            var x = e.target.value;
            let leng = lenguajes.filter(e => e.nameLenguaje === x);
            setLenguaje(leng[0])
            }
            else{
                setSalida([]);
                setLenguaje({nameLenguaje: '',alfabeto:[]})
            }
            setSeleccion(e.target.value);
        }

        if(e.target.id === "potencia"){
            setPotencia(e.target.value)
        }
    }

    const handleClick = e => {
        e.preventDefault();
        // console.log(seleccion);
        if(seleccion !== 'Lenguajes...'){
            if(potencia >= 0){
                console.log(lenguaje);
                //aqui va el proceso de potenciar el lenguaje
                setSalida(potenciaLenguaje(lenguaje,potencia));
            }
            else{
                alert("CUIDADO...La potencia debe ser mayor o igual a 0...!")
            }
        }
        else{
            alert("En la operación potencia de un lenguaje es necesario\nque seleccione el lenguaje que va a procesar.");
        }
    }

    const revisandoSalida = () => {
        if(salida[0] !== "ε"){
            return imprimirAlfabetoFormateado(salida)
        }   
        else{
            return "{ε}";
        }        
    }

    return (
        <div className="formulario-seleccion-lenguaje">
            <h3>Potencia de un lenguaje</h3>
            <form className="formulario-seleccion-lenguaje__form form-inline">
                
                    <div className="form-group row-custom">
                        <label htmlFor="lenguajeSeleccionado">Selecciona un lenguaje</label>
                        <select onChange={handleChange} value={seleccion} className="form-control" id="lenguajeSeleccionado">
                            <option>Lenguajes...</option>
                            {lenguajes.map(e => <option key={e.nameLenguaje}>{e.nameLenguaje}</option>)}
                        </select>
                        <div className="col">
                            <input id="potencia" min="0" onChange={handleChange} value={potencia} type="number" className="form-control" placeholder="potencia"/>
                        </div>
                    </div>
                
                <div className="col-auto">
                    <button onClick={handleClick} className="btn btn-success boton">Go</button>
                </div>
            </form>
            <div className="salida">
                <p className="pot">{revisandoSalida()}</p>
            </div>
        </div>
    );



}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(PotenciaLenguaje);