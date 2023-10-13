export  const togglePasswordVisibility = (event) => {
    event.preventDefault()
    const previousSibling = event.currentTarget.previousElementSibling;
    if (previousSibling.tagName === "INPUT") {
      if (previousSibling.getAttribute("type") === "password") {
        previousSibling.setAttribute("type", "text");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`;
      } else {
        previousSibling.setAttribute("type", "password");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`;
      }
    }
   };