// In your action file (userDataActions.js or similar)
import { USER_DATA } from "redux/constant";

export const userData = (userData) => ({
    type: USER_DATA,
    payload: userData,
});
