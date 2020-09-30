import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

const InterseccionLenguajes = ({lenguajes}) => {

    const [nombresDeLenguajesSeleccionados,setNombresDeLenguajesSeleccionados] = useState([]);
    
    useEffect(()=>{
        console.log(nombresDeLenguajesSeleccionados);
    },[nombresDeLenguajesSeleccionados])

    const handleSubmit = e => {
        e.preventDefault();

        let nombresLenguajesSeleccionados = [];
        for (let i=0 ; i < 2 ; i++) {
            let elemento = document.getElementById(`lenguaje${i+1}`);
            if(elemento != null){
                nombresLenguajesSeleccionados.push(elemento.value);
            }
            else console.log("no hay nada seleccionado");
        }
        setNombresDeLenguajesSeleccionados(nombresLenguajesSeleccionados);
    }

    const mostrarBarrasDeSeleccion = () => {
        //rebusque jajaja
        let vector = [];
        for (let i=0 ; i < 2 ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`lenguaje${i+1}`}>Selecciona el lenguaje {`${i+1}`}</label>
                <select id={`lenguaje${i+1}`} className="form-control">
                    <option>Lenguaje...</option>
                    {lenguajes.map(e => <option key={e.nameLenguaje}>{e.nameLenguaje}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Intersección entre lenguajes</h3>

            <form onSubmit={handleSubmit}>

                <div className="form-row row-unica">
                    {mostrarBarrasDeSeleccion()}
                </div>

                <div className="col-auto">
                    <button className="btn btn-success boton btn-block">Go</button>
                </div>

            </form>
            <div className="Salida-unica">
                <p>Aqui se llama a la funcion que se encarga de la interseccion los lenguajes selecionados y se muestra el resultado</p>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(InterseccionLenguajes);