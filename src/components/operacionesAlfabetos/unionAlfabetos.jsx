import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

// import { uniondelenguajes, imprimirAlfabetoFormateado } from '../../modules/modulo1';

const UnionAlfabetos = ({alfabetos}) => {

    const [numeroDeAlfabetos,setNumeroDeAlfabetos] = useState(2);
    const [nombresDeAlfabetosSeleccionados,setNombresDeAlfabetosSeleccionados] = useState([]);
    const [salida,setSalida] = useState([]);

    useEffect(()=>{
        mostrarBarrasDeSeleccion();
    },[numeroDeAlfabetos])
    
    useEffect(()=>{
        // console.log(nombresDeLenguajesSeleccionados);
        trabajandoSalida();
    },[nombresDeAlfabetosSeleccionados])

    const trabajandoSalida = () => {
        // console.log(nombresDeLenguajesSeleccionados);
        if(nombresDeAlfabetosSeleccionados.length !== 0){

            var vecls = [];
            for(let i=0 ; i < nombresDeAlfabetosSeleccionados.length ; i++){
                let elemento = alfabetos.filter( e => e.nameAlfabeto === nombresDeAlfabetosSeleccionados[i]);
                vecls.push(elemento[0]);
            }
            
            // setSalida(uniondelenguajes(vecls));
        }
    }

    const handleChange = e => {
        if(e.target.value >= 2){
            // console.log(e.target.value);
            setNumeroDeAlfabetos(e.target.value)
        }
        else{
           // console.log(e.target.value);
            setNumeroDeAlfabetos(2);            
        }
    }

    const handleSubmit = e => {

        e.preventDefault();

        // let elemento = document.getElementById("lenguaje1SU");
        // console.log(elemento.value);

        let nombresAlfabetosSeleccionados = [];
        for (let i=0 ; i < numeroDeAlfabetos ; i++) {
            let elemento = document.getElementById(`alfabeto${i+1}`);
            if(elemento != null){
                nombresAlfabetosSeleccionados.push(elemento.value);
            }
            else console.log("no hay nada seleccionado");
        }

        console.log(nombresAlfabetosSeleccionados);
        
        var seleccionesCompletas = true
        for(let i=0 ; i < nombresAlfabetosSeleccionados.length ; i++){
            if(nombresAlfabetosSeleccionados[i] === "Alfabeto..."){
                return seleccionesCompletas = false;
            }
        }
        
        if(seleccionesCompletas) setNombresDeAlfabetosSeleccionados(nombresAlfabetosSeleccionados);
    }

    const mostrarBarrasDeSeleccion = () => {
        //rebusque jajaja
        let vector = [];
        for (let i=0 ; i < numeroDeAlfabetos ; i++) vector.push('x');

        return vector.map((e,i)=>(
            <div key={i+1} className="col">
                <label htmlFor={`alfabeto${i+1}`}>Selecciona el alfabeto {`${i+1}`}</label>
                <select id={`alfabeto${i+1}`} className="form-control">
                    <option>Alfabeto...</option>
                    {alfabetos.map(a => <option key={a.nameAlfabeto}>{a.nameAlfabeto}</option>)}
                </select>
            </div>
        ))

        //si jala carajoo
    }

    return(
        <div className="formato-seleccion-lenguajes">
            <h3>Union entre Alfabetos</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-row row-1">
                    <div className="col">
                        <label htmlFor="numeroalfabetos">Numero de alfabetos</label>
                        <select onChange={handleChange} id="numeroalfabetos" value={numeroDeAlfabetos} className="form-control">
                            <option>2</option>
                            {alfabetos.map((e,i) => {if(i>=2){return <option key={i}>{i+1}</option>}})}
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
                {/* <p>{imprimirAlfabetoFormateado(salida)}</p> */}
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    alfabetos: state.listAlfabetos
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(UnionAlfabetos);