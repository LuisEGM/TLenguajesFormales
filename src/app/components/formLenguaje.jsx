import React, { useState } from 'react';
import { connect } from 'react-redux';

const FormLenguaje = ({agregarLenguaje}) => {

    const [namelenguaje,setNameLenguaje] = useState('');
    const [alfabeto,setAlfabeto] = useState('');

    const handleChange = e => {
        if(e.target.name == "nameLenguage") setNameLenguaje(e.target.value);
        if(e.target.name == "alfabeto") setAlfabeto(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(namelenguaje != '' && alfabeto != ''){
            let lenguaje = {nameLenguaje: namelenguaje,alfabeto: alfabeto}
            agregarLenguaje(lenguaje);
            setNameLenguaje('');
            setAlfabeto('');
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
                    <div className="form-group">
                        <label className="label-tx" htmlFor="nameLenguaje">Nombre del lenguaje</label>
                        <input autoComplete="off" value={namelenguaje} onChange={handleChange} type="text" name="nameLenguage" className="form-control" placeholder="Mi lenguaje"/>
                    </div>
                    <div className="form-group">
                        <label className="label-tx" htmlFor="area-texto">Ingresa el alfabeto</label>
                        <textarea value={alfabeto} onChange={handleChange} className="form-control" name="alfabeto" rows="3"></textarea>
                    </div>
                    <button className="btn btn-block badge-success boton">Agregar Lenguaje</button>
                </form>

            </div>
        </div>
    );
}

//Haciendo uso del store de redux

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    
    agregarLenguaje(lenguaje){
        dispatch({
            type: 'AGREGAR_LENGUAJE',
            lenguaje
        })
    }

});



export default connect(mapStateToProps,mapDispatchToProps)(FormLenguaje);

