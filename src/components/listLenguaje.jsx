import React from 'react';
import { connect } from 'react-redux';

//Importando funcuonalidad de los modulos
import { imprimirAlfabetoFormateadoLen, cardinalidadDeUnLenguaje } from '../modules/modulo1';

const ListLenguaje = ({lista,elimminarLenguaje}) => {
    
    const mostrarLenguajes = () => {
        if(lista.length === 0){
            return <div className="doc-blank" >
                <img src="https://www.flaticon.es/svg/static/icons/svg/187/187293.svg" alt="docs"/>
                <h4>¡ Ningun lenguaje por aquí !</h4>
            </div>
        }
        else{
            return lista.map((elem,i)=>(
                <div key={i} className="card-item">
                    <div className="card-top">
                        <h3>{elem.nameLenguaje}</h3>
                        <button onClick={
                            () => {
                                if(elem.nameLenguaje === 'Vacio' || elem.nameLenguaje === 'Lenguaje Vacio'){
                                    alert("ALERTA... Este lenguaje es estandar\nde las operaciones entre lenguajes\nNo se puede borrar...!");
                                }
                                else{
                                    if(window.confirm(`Seguro que:\n¿ Deseas eliminar el lenguaje "${elem.nameLenguaje}" de la lista ?`))
                                    elimminarLenguaje(elem)
                                }
                            }
                        } >X</button>
                    </div>
                    <div className="cardinalidad">Cardinalidad: {cardinalidadDeUnLenguaje(elem)}</div>
                    <div className="card-info">
                        <div className="alfabeto">
                            <p>{imprimirAlfabetoFormateadoLen(elem)}</p>
                        </div>
                    </div>                    
                </div>
            ))
        }
    }

    return(
        <div className="col-md-7">
            <div className="contenedor-lenguajes">
                <h3 className="text-center">Tus Lenguajes</h3>
                {
                    mostrarLenguajes()
                }
            </div>
        </div>
    );

}

//utilizando el store de redux

const mapStateToProps = state => ({
    lista: state.listLenguajes
})

const mapDispatchToProps = dispatch => ({

    elimminarLenguaje(lenguaje){
        dispatch({
            type: 'ELIMINAR_LENGUAJE',
            lenguaje
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(ListLenguaje);