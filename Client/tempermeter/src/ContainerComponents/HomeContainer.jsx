import {connect} from "react-redux";
import Home from "../Components/Home";
import updateUserInfoActionCreator from "../redux/action-creators/user-info-action-creators";

const mapStateToProps = (state, props) => {
    return {
        history: props.history,
        user_id: props.user_id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInfo: (userInfo) => {
            dispatch(updateUserInfoActionCreator(userInfo));
        }
    }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;