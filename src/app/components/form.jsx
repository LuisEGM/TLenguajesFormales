import React, { useState } from 'react';
import { separarAlfaveto } from '../modules/modulo1';

const Form = () => {

    const [lenguaje,setLenguaje] = useState({});

    const handleChange = e => {
        setLenguaje({
            ...lenguaje,
            [e.target.name]: e.target.value
        })
        console.log(lenguaje);
    }

    const handleSubmit = e => {
        e.preventDefault();
        separarAlfaveto(lenguaje);
    }

    return(
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4"> 
                    <div className="card-body bg-primary target">

                        <h3 className="text-center">Lenguaje</h3>
                        
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <label className="label-tx" htmlFor="nameLenguaje">Nombre del lenguaje</label>
                                <input autoComplete="off" value={lenguaje.name} onChange={handleChange} type="text" name="nameLenguage" className="form-control" placeholder="Mi lenguaje"/>
                            </div>
                            <div className="form-group">
                                <label className="label-tx" htmlFor="area-texto">Ingresa el alfabeto</label>
                                <textarea value={lenguaje.alfabeto} onChange={handleChange} className="form-control" name="alfabeto" rows="3"></textarea>
                            </div>
                            <button className="btn btn-block badge-success boton">Generar Lenguaje</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;