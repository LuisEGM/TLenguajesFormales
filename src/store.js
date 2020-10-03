import { createStore } from 'redux';

const initialState = {
    listLenguajes: [
        {
            nameLenguaje: 'Vacio',
            alfabeto: ["Φ"]
        },
        {
            nameLenguaje: 'Lenguaje Vacio',
            alfabeto: ["ε"]
        }
    ],
    listAlfabetos: [],
    listPalabras: [],
    operacionLenguaje: '',
    operacionAlfabeto: ''
}

const reducer = (state=initialState,action) => {

    console.log(action);

    switch(action.type){
        case 'AGREGAR_LENGUAJE':
            return {
                ...state,
                listLenguajes: state.listLenguajes.concat(action.lenguaje)
            }

        case 'ELIMINAR_LENGUAJE':
            return {
                ...state,
                listLenguajes: state.listLenguajes.filter(l => l.nameLenguaje !== action.lenguaje.nameLenguaje)
            }
        
        case 'ACTUALIZAR_OPERACION_LENGUAJE':
            return {
                ...state,
                operacionLenguaje: action.nuevaOperacion
            }
        
        case 'AGREGAR_ALFABETO':
            console.log("entro y agrego");
            return {
                ...state,
                listAlfabetos: state.listAlfabetos.concat(action.alfabeto)
            }

        case 'ELIMINAR_ALFABETO':
            return {
                ...state,
                listAlfabetos: state.listAlfabetos.filter(l => l.nameAlfabeto !== action.alfabeto.nameAlfabeto)
            }

        case 'ACTUALIZAR_OPERACION_ALFABETO':
            return {
                ...state,
                operacionAlfabeto: action.nuevaOperacion
            }

        case 'AGREGAR_PALABRA':
            return {
                ...state,
                listPalabras: state.listPalabras.concat(action.palabra)
            }    

        case 'ELIMINAR_PALABRA':
            return {
                ...state,
                listPalabras: state.listPalabras.filter(l => l !== action.palabra)
            }

        default:
            break;
    }
    

    return state;
}

export default createStore(reducer);