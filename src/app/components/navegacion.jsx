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
            <Link className="navbar-brand title-nav-left" to="/">Teoria De Lenguajes Formales</Link>
            <div className="title-nav-right">
                {resaltar()}
            </div>
        </nav>
    ); 
}

export default Navegacion;