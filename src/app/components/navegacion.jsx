import React from 'react';

const Navegacion = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar">
            <a className="navbar-brand title-nav-left" href="#">Teoria De Lenguajes Formales</a>
            <div className="title-nav-right">
                <a className="navbar-brand item" href="#">Lenguajes</a>
                <a className="navbar-brand item" href="#">Alfavetos</a>
            </div>
        </nav>
    );
}

export default Navegacion;