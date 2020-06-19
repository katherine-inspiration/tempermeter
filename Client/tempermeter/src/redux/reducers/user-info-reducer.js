export const UPDATE_USER_INFO = 'UPDATE-USER-INFO';

const initialState = {
    user_id: '1'
}

const userInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
};

export default userInfoReducer;