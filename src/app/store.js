import { createStore } from 'redux';

const initialState = {
    listLenguajes: [
        {
            nameLenguaje: 'Español',
            alfabeto: 'a c d r f t g v d e r',
            elemUnidad: '#'
        },
        {
            nameLenguaje: 'Ingles',
            alfabeto: 'y t j i k w r y x w q',
            elemUnidad: '&'
        }
    ],
    operacionLenguaje: ''
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
                listLenguajes: state.listLenguajes.filter(l => l.nameLenguaje != action.lenguaje.nameLenguaje)
            }
        
        case 'ACTUALIZAR_OPERACION_LENGUAJE':
            return {
                ...state,
                operacionLenguaje: action.nuevaOperacion
            }
        
        default:
            break;
    }
    

    return state;
}

export default createStore(reducer);