export const UPDATE_SESSION_ID = 'UPDATE-SESSION-ID';

const initialState = {
    session_id:null
};

const sessionInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SESSION_ID:
            return {
                session_id: action.session_id
            };
        default:
            return state;
    }
};

export default sessionInfoReducer;