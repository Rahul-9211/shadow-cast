/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module utility-function
 *@developer Aditya P
 */

/*
    This file contains 3rd party utility function for handling complex logix and calculation
*/

import eyeOn from "assets/images/eye-on.svg";
import eyeOff from "assets/images/eye-off.svg";

// Toggle Password Visibility Function
export const togglePasswordVisibility = (event) => {
    event.preventDefault()
    const previousSibling = event.currentTarget.previousElementSibling;
    if (previousSibling.tagName === "INPUT") {
        if (previousSibling.getAttribute("type") === "password") {
            previousSibling.setAttribute("type", "text");
            event.currentTarget.innerHTML = `<img src=${eyeOn} alt="PasswordVisibility" />`;
        } else {
            previousSibling.setAttribute("type", "password");
            event.currentTarget.innerHTML = `<img src=${eyeOff} alt="PasswordVisibility" />`;
        }
    }
};


// Validation for Email
export const isValidEmail = (email) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
};

// Validation for Strong Password
export const isStrongPassword = (password) => {
    const passwordStrengthRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;
    return passwordStrengthRegex.test(password);
};
