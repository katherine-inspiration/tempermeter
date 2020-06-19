import {UPDATE_USER_INFO} from "../reducers/user-info-reducer";


const updateUserInfoActionCreator = (userInfo) => {
    return {
        type: UPDATE_USER_INFO,
        userInfo: {
            ...userInfo
        }
    };
};

export default updateUserInfoActionCreator;