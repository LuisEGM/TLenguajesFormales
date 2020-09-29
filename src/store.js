import { createStore } from 'redux';

const initialState = {
    listLenguajes: [
        // {
        //     nameLenguaje: 'Lenguaje Vacio',
        //     alfabeto: 'ε'
        // },
        // {
        //     nameLenguaje: 'Español',
        //     alfabeto: 'ab bc cd de ef fg hi'
        // },
        // {
        //     nameLenguaje: 'Ingles',
        //     alfabeto: 'carro loma pila oso rata gato lima'
        // }
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
                listLenguajes: state.listLenguajes.filter(l => l.nameLenguaje !== action.lenguaje.nameLenguaje)
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