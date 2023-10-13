import eyeOn from "assets/images/eye-on.svg";
import eyeOff from "assets/images/eye-off.svg";
export  const togglePasswordVisibility = (event) => {
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