// In your reducer file (userDataReducer.js or similar)
import { USER_DATA } from "redux/constant";

const initialState = {
    token: '',
    userName: '',
    email: '',
    userType: ''
}

const userDataReducer = (state = initialState, action) => {
    // console.log("i clalled", action.type)
    switch (action.type) {
        case USER_DATA:
            // const test = {
            //     ...state, // Copy the existing state
            //     ...action.payload, // Update with new data from the action payload
            // }
            // console.log("🚀 ~ file: userDataReducer.js:17 ~ userDataReducer ~ test:", test)

            return {
                ...state, // Copy the existing state
                ...action.payload, // Update with new data from the action payload
            };
        default:
            return state;
    }
}

export default userDataReducer;
