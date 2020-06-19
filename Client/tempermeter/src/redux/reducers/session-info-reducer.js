export const UPDATE_SESSION_ID = 'UPDATE-SESSION-ID';

const initialState = null;

const sessionInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SESSION_ID:
            return { ...state,
                session_id: action.session_id
            };
        default:
            return state;
    }
};

export default sessionInfoReducer;