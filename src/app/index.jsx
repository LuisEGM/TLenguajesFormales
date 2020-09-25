import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';

//Importando estilos
import 'bootswatch/dist/lux/bootstrap.min.css';
import './styles/main.scss';

render(<App/>,document.getElementById("root"));