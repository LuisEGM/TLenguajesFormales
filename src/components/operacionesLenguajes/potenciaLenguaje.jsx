import React, {useState} from 'react';
import {connect} from 'react-redux';

const PotenciaLenguaje = ({lenguajes}) => {

    const [seleccion,setSeleccion] = useState('Lenguajes...');
    const [salida,setSalida] = useState([]);
    const [lenguaje,setLenguaje] = useState({nameLenguaje: '',alfabeto:[]})

    const handleChange = e => {
        // console.log("change => ",e.target.value);
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

    const handleClick = e => {
        e.preventDefault();
        // console.log(seleccion);
        if(seleccion !== 'Lenguajes...'){
            let Lenguaje = lenguajes.filter(e => e.nameLenguaje === seleccion);
            
            //aqui va el proceso de potenciar el lenguaje
            //let lenguajeInvertido = invertirLenguaje(Lenguaje[0].alfabeto);
            //el resultado se mete en salida para que se muestre.
            // setSalida(lenguajeInvertido);
        
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
                    </div>
                
                <div className="col-auto">
                    <button onClick={handleClick} className="btn btn-success boton">Go</button>
                </div>
            </form>
            <div className="salida">
                {/* {lenguajes.length !== 0 && 
                <p>{imprimirAlfabetoFormateado(salida)}</p>
                } */}
            </div>
        </div>
    );



}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(PotenciaLenguaje);