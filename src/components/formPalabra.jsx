import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import { formatearAlfabeto } from '../modules/modulo1';

const FormPalabra = ({palabras,agregarPalabra}) => {

    const [palabra,setPalabra] = useState('');

    useEffect(()=>{
        centrarFormulario();
    },[palabras])

    const centrarFormulario = () => {
        let elemento = document.getElementById("centrar");
        if(palabras.length === 0){
            if(elemento !== null){
                elemento.classList.add("offset-md-4")
            }
        }
        else{
            if(elemento !== null){
                elemento.classList.remove("offset-md-4")
            }
        }
    }

    const handleChange = e => {
        console.log(e.target.value);
        setPalabra(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let existe = false;
        //quito espacios comparo
        let palSinEspVec = formatearAlfabeto(palabra);
        // console.log(palSinEspVec);
        let palSinEsp = palSinEspVec[0];
        
        palabras.forEach(p => {
            if(p === palSinEsp){
                existe = true;
            }
        })
        if(!existe){
            agregarPalabra(palSinEsp);
            setPalabra('');
        } 
        else alert("Esta palabra ya esta listada, por favor intenta otra...!");
    }

    return(
        //offset-md-4
        <div id="centrar" className="col-md-4">
            <div className="card-body bg-primary targetpal">
                <h3 className="text-center">Palabras</h3>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label className="label-tx" htmlFor="palabra">Ingresa tu palabra</label>
                        <input autoComplete="off" value={palabra} onChange={handleChange} type="text" id="palabra" name="palabra" className="form-control" placeholder="..."/>
                    </div>
                    <button className="btn btn-block badge-success boton">Agregar Palabra</button>
                </form>
            </div>
        </div>
        
    );

}

const mapStateToProps = state => ({
    palabras: state.listPalabras
})

const mapDispatchToProps = dispatch => ({

    agregarPalabra(palabra){
        dispatch({
            type: 'AGREGAR_PALABRA',
            palabra
        })
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(FormPalabra);