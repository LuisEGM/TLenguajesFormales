import React, { useState } from 'react';
import { connect } from 'react-redux';

const FormLenguaje = ({list,agregarLenguaje}) => {

    const [namelenguaje,setNameLenguaje] = useState('');
    const [alfabeto,setAlfabeto] = useState('');

    const handleChange = e => {
        if(e.target.name == "nameLenguage") setNameLenguaje(e.target.value);
        if(e.target.name == "alfabeto") setAlfabeto(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        var existe = false;
        // console.log("lista a comparar",list);
        list.forEach(e => {
            if(e.nameLenguaje == namelenguaje) return existe=true;
        })

        //comprueba que los campos esten llenos
        if(namelenguaje != '' && alfabeto != ''){
            //y que el nombre del lenguaje no se repita
            if(existe){
                alert("El nombre de tu lenguaje ya fue asignado a otro previamente.\nIntenta con otro...!");
            }
            else{
                let lenguaje = {
                    nameLenguaje: namelenguaje,
                    alfabeto: alfabeto
                }
                // console.log(lenguaje);
                agregarLenguaje(lenguaje);
                setNameLenguaje('');
                setAlfabeto('');
            }
        }
        else{
            alert("Asegurate de llenar el formulario...!");
        }
    }

    return(
        <div className="col-md-5"> 
            <div className="card-body bg-primary target">

                <h3 className="text-center">Lenguaje</h3>
                
                <form onSubmit={handleSubmit} className="form">

                    <div className="col-md-7 form-group">
                        <label className="label-tx" htmlFor="nameLenguaje">Nombre del lenguaje</label>
                        <input autoComplete="off" value={namelenguaje} onChange={handleChange} type="text" name="nameLenguage" className="form-control" id="nameLenguaje" placeholder="Mi lenguaje"/>
                    </div>

                    <div className="form-group">
                        <label className="label-tx" htmlFor="area-texto">Ingresa el alfabeto <span>(separando por espacios)</span> </label>
                        <textarea value={alfabeto} onChange={handleChange} className="form-control" name="alfabeto" rows="3" id="area-texto" placeholder="Ejemplo: a b c d e..." ></textarea>
                    </div>
                    <button className="btn btn-block badge-success boton">Agregar Lenguaje</button>
                </form>

            </div>
        </div>
    );
}

//Haciendo uso del store de redux

const mapStateToProps = state => ({
    list: state.listLenguajes
});

const mapDispatchToProps = dispatch => ({
    
    agregarLenguaje(lenguaje){
        dispatch({
            type: 'AGREGAR_LENGUAJE',
            lenguaje
        })
    }

});



export default connect(mapStateToProps,mapDispatchToProps)(FormLenguaje);

