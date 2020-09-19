import React from 'react';

const Form = () => {
    return(
        <div class="container p-4">
            <div class="row">
                <div class="col-md-4"> 
                    <div class="card-body bg-primary target">
                        <h3 class="text-center">Lenguaje</h3>
                        <form action="" class="form">
                            <div class="form-group">
                                <label class="label-tx" for="nameLenguaje">Nombre del lenguaje</label>
                                <input type="text" name="nameLenguage" class="form-control" id="nameLenguaje" placeholder="Mi lenguaje"/>
                            </div>
                            <div class="form-group">
                                <label class="label-tx" for="area-texto">Ingresa el alfabeto</label>
                                <textarea class="form-control" name="alfabeto" id="area-texto" rows="3"></textarea>
                            </div>
                            <button class="btn btn-block badge-success boton">Generar Lenguaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;