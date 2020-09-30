import React, { useState } from 'react';
import { connect } from 'react-redux';

import { formatearAlfabeto } from '../modules/modulo1';

const FormAlfabeto = ({list,agregarAlfabeto}) => {

    const [nameAlfabeto,setNameAlfabeto] = useState('');
    const [simbolos,setSimbolos] = useState('');

    const handleChange = e => {
        if(e.target.name === "nameAlfabeto") setNameAlfabeto(e.target.value);
        if(e.target.name === "simbolos") setSimbolos(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        var existe = false;
        // console.log("lista a comparar",list);
        list.forEach(e => {
            if(e.nameAlfabeto === nameAlfabeto) return existe=true;
        })

        //comprueba que los campos esten llenos
        if(nameAlfabeto !== '' && simbolos !== ''){
            //y que el nombre del alfabeto no se repita
            if(existe){
                alert("El nombre de tu alfabeto ya existe.\nPor favor intenta con otro...!");
            }
            else{
                let simbolosFormateado = formatearAlfabeto(simbolos)
                let alfabeto = {
                    nameAlfabeto: nameAlfabeto,
                    simbolos: simbolosFormateado
                }
                // console.log(lenguaje);
                agregarAlfabeto(alfabeto);
                setNameAlfabeto('');
                setSimbolos('');
            }
        }
        else{
            alert("Asegurate de llenar el formulario...!");
        }
    }

    return(
        <div className="col-md-5"> 
            <div className="card-body bg-primary target">

                <h3 className="text-center">Alfabeto</h3>
                
                <form onSubmit={handleSubmit} className="form">

                    <div className="form-group">
                        <label className="label-tx" htmlFor="nameAlfabeto">Nombre del alfabeto</label>
                        <input autoComplete="off" value={nameAlfabeto} onChange={handleChange} type="text" name="nameAlfabeto" className="form-control" id="nameAlfabeto" placeholder="Mi alfabeto"/>
                    </div>

                    <div className="form-group">
                        <label className="label-tx" htmlFor="area-texto">Ingresa simbolos<span>(separando por espacios)</span> </label>
                        <textarea value={simbolos} onChange={handleChange} className="form-control" name="simbolos" rows="3" id="area-texto" placeholder="Ejemplo: a b c d e..." ></textarea>
                    </div>
                    <button className="btn btn-block badge-success boton">Agregar Alfabeto</button>
                </form>

            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    list: state.listAlfabetos
});

const mapDispatchToProps = dispatch => ({
    
    agregarAlfabeto(alfabeto){
        dispatch({
            type: 'AGREGAR_ALFABETO',
            alfabeto
        })
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(FormAlfabeto);