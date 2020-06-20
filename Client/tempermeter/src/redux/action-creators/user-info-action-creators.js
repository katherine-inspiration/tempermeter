import {UPDATE_USER_INFO} from "../reducers/user-info-reducer";


const updateUserInfoActionCreator = (userInfo) => {
    return {
        type: UPDATE_USER_INFO,
        userInfo: {
            user_id: userInfo.user_id
        }
    };
};

export default updateUserInfoActionCreator;