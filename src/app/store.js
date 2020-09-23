import { createStore } from 'redux';

const initialState = {
    listLenguajes: []
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
    
        default:
            break;
    }
    
    return state;
}

export default createStore(reducer);