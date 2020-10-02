import React, { Fragment } from 'react';
import { connect } from 'react-redux';

//Importando funcuonalidad de los modulos
import { invertirPalabra } from '../modules/modulo1';

const ListLenguaje = ({palabras,eliminarPalabra}) => {

    return(
        <Fragment>
            {
                palabras.length !== 0 && 
                <div className="col-md-8">
                    <div className="contenedor-palabras">
                        <h3 className="text-center">Tus Palabras</h3>
                        <table class="table table-striped table-light table-bordered" >
                            <thead className="text-center">
                                <tr>
                                    <th scope="col">Palabra</th>
                                    <th scope="col">Cardinalidad</th>
                                    <th scope="col">Inversa</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    palabras.map((e,i) => (
                                        <tr key={i}>
                                            <td>{e}</td>
                                            <td>{e.length}</td>
                                            <td>{invertirPalabra(e)}</td>
                                            <td>
                                                <img 
                                                    src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"
                                                    onClick={()=>{eliminarPalabra(e)}}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </Fragment>
    );

}

//utilizando el store de redux

const mapStateToProps = state => ({
    palabras: state.listPalabras
})

const mapDispatchToProps = dispatch => ({

    eliminarPalabra(palabra){
        dispatch({
            type: 'ELIMINAR_PALABRA',
            palabra
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(ListLenguaje);