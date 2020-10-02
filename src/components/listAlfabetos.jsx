import React from 'react';
import { connect } from 'react-redux';

import { imprimirSimbolosFormateado } from '../modules/modulo1';

const ListAlfabetos = ({list,eliminarAlfabeto}) => {

    const mostrarAlfabetos = () => {
        console.log("listalfabetos:",list);
        if(list.length === 0){
            return <div className="doc-blank" >
                <img src="https://www.flaticon.es/svg/static/icons/svg/187/187293.svg" alt="docs"/>
                <h4>¡ Ningun alfabeto por aquí !</h4>
            </div>
        }
        else{
            return list.map((elem,i)=>(
                <div key={i} className="card-item">
                    <div className="card-top">
                        <h3 className="alf">{elem.nameAlfabeto}</h3>
                        <button onClick={
                            () => {if(window.confirm(`Seguro que:\n¿ Deseas eliminar el alfabeto "${elem.nameAlfabeto}" de la lista ?`)) eliminarAlfabeto(elem)}
                        } >X</button>
                    </div>
                    <div className="card-info">
                        <div className="alfabeto">
                            <p>{imprimirSimbolosFormateado(elem)}</p>
                        </div>
                    </div>                    
                </div>
            ))
        }
    }

    return(
        <div className="col-md-7">
            <div className="contenedor-lenguajes">
                <h3 className="text-center">Tus Alfabetos</h3>
                {
                    mostrarAlfabetos()
                }
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    list: state.listAlfabetos
})

const mapDispatchToProps = dispatch => ({

    eliminarAlfabeto(alfabeto){
        dispatch({
            type: 'ELIMINAR_ALFABETO',
            alfabeto
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(ListAlfabetos);