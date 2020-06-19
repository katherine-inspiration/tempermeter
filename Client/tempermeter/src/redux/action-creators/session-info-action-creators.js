import {UPDATE_SESSION_ID} from "../reducers/session-info-reducer";

const updateSessionIdActionCreator = (session_id) => {
    return {
        type: UPDATE_SESSION_ID,
        session_id
    }
};

export default updateSessionIdActionCreator;