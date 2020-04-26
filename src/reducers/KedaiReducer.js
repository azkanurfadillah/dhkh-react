import {GET_ID_DETAIL} from '../actions/kedai/KedaiAction';

const initialState = {
    idDetail: ""
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ID_DETAIL:
            return{
                ...state,
                idDetail:action.payload
            };
        default:
            return state;
    }
}