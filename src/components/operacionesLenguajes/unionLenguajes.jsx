import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

const UnionLenguajes = ({lenguajes}) => {

    const [numeroDeLenguajes,setNumeroDeLenguajes] = useState(2);
    const [nombresDeLenguajesSeleccionados,setNombresDeLenguajesSeleccionados] = useState([]);

    
    useEffect(()=>{
        mostrarBarrasDeSeleccion();
    },[numeroDeLenguajes])

    
    useEffect(()=>{
        console.log(nombresDeLenguajesSeleccionados);
    },[nombresDeLenguajesSeleccionados])

    
    const handleChange = e => {
        if(e.target.value >= 2){
            // console.log(e.target.value);
            setNumeroDeLenguajes(e.target.value)
        }
        else{
            console.log(e.target.value);
            setNumeroDeLenguajes(2);            
        }
    }

    const handleSubmit = e => {
        //SU Seleccionado para Union
        e.preventDefault();

        // let elemento = document.getElementById("lenguaje1SU");
        // console.log(elemento.value);

        let nombresLenguajesSeleccionados = [];
        for (let i=0 ; i < numeroDeLenguajes ; i++) {
            let elemento = document.getElementById(`lenguaje${i+1}SU`);
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
        for (let i=0 ; i < numeroDeLenguajes ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`lenguaje${i+1}SU`}>Selecciona el lenguaje {`${i+1}`}</label>
                <select id={`lenguaje${i+1}SU`} className="form-control">
                    <option>Lenguaje...</option>
                    {lenguajes.map(e => <option key={e.nameLenguaje}>{e.nameLenguaje}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Union entre lenguajes</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-row row-1">
                    <div className="col">
                        <label htmlFor="numerolenguajes">Numero de lenguajes</label>
                        <select onChange={handleChange} id="numerolenguajes" value={numeroDeLenguajes} className="form-control">
                            <option>2</option>
                            {lenguajes.map((e,i) => {if(i>=2){return <option key={i}>{i+1}</option>}})}
                        </select>
                    </div>
                </div>

                <div className="form-row row-2">
                    {mostrarBarrasDeSeleccion()}
                </div>

                <div className="col-auto">
                    <button className="btn btn-success boton btn-block">Go</button>
                </div>

            </form>
            <div className="Salida">
                <p>Aqui se llama a la funcion que se encarga de unir los lenguajes sleecionados y se muestra el resultado</p>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(UnionLenguajes);