import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Navegacion = ({location}) => {

    const resaltar = () => {
        if(location == "pagelenguajes"){
            return (
                <Fragment>
                    <Link className="navbar-brand item resaltar" to="/">Lenguajes</Link>                
                    <Link className="navbar-brand item" to="/alfabetos">Alfavetos</Link>
                </Fragment>
            );
        }
        if(location == "pagealfabetos"){
            return (
                <Fragment>
                    <Link className="navbar-brand item" to="/">Lenguajes</Link>                
                    <Link className="navbar-brand item resaltar" to="/alfabetos">Alfavetos</Link>
                </Fragment>
            );
        }
          
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar">
            <div className="title-nav-left">
                <Link className="contenedor-img" to="/">
                    <img src="https://www.flaticon.es/svg/static/icons/svg/2092/2092543.svg" alt="Logo"/>
                </Link>
                <Link className="navbar-brand text" to="/">Teoria De Lenguajes Formales</Link>
            </div>
            <div className="title-nav-right">
                {resaltar()}
            </div>
        </nav>
    ); 
}

export default Navegacion;