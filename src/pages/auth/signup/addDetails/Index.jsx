/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingUp
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */

 import { Box } from "@mui/material";
 import { useEffect, useRef, useState } from "react";
 import { NavLink, useNavigate } from "react-router-dom";
 import GoogleLogin from "components/buttons/Google";
 
 import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
 import {
   isValidEmail,
   isStrongPassword,
   togglePasswordVisibility,
 } from "utils/index";
 import eyeOff from "assets/images/eye-off.svg";
 import CheckList from "components/password/checklist";
 
 import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
 import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
 import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SERVICE_URL } from "pages/api/services";
import { setUserData } from "store/slicer/userAuth/userData";
 /* This code is a React component for user registration with the option to switch between "User" and "Creator" accounts. It performs real-time validation for name, email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
  */
 const AddDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {username , dob} = useSelector((state)=> state.userData)
   const [screenSize, setScreenSize] = useState({
     width: window.innerWidth,
     height: window.innerHeight,
   });
 
   // Function to update screen size
   const updateScreenSize = () => {
     setScreenSize({
       width: window.innerWidth,
       height: window.innerHeight,
     });
   };
 
   useEffect(() => {
     // Add event listener for resize event
     window.addEventListener('resize', updateScreenSize);
 
     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener('resize', updateScreenSize);
     };
   }, [screenSize.width]);
   const [signUpType, setSignUpType] = useState("user");
   const [formData, setFormData] = useState({
     name: username,
     email: "",
     password: "",
     date: "12/10/2000",
   });
   const [formErrors, setFormErrors] = useState({
     name: "",
     email: "",
     password: "",
     date: "",
   });
   const isRequired = (value) => (value === "" ? false : true);
  
   // Function to validate the form data
   const validateForm = () => {
     const boolName = checkName(formData.name);
     const boolGender = checkGender(selectedGender);
     const boolCalenderDate = checkCalenderDate(selectedDate);
 
     if (boolGender && boolCalenderDate && boolName) {
       return true;
     } else return false;
   };
 
   const checkGender = (selectedGender) => {
     if (selectedGender === "-Select-") {
       setgenderError(true);
       return false;
     } else {
       setgenderError(false);
       return true;
     }
   };
   const checkCalenderDate = (selectedGender) => {
     if (selectedDate === "dd/mm/yyyy") {
       setDOBError(true);
       return false;
     } else {
       setDOBError(false);
       return true;
     }
   };
   // Function to handle input changes
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value.trim(),
     });
     
   };
 
   // Function to handle form submission
   const handleSubmit = async (e) => {
    //  console.log("🚀 ~ file: Index.jsx:97 ~ handleSubmit ~ e:", e);
     e.preventDefault();
     if (validateForm()) {
       alert(JSON.stringify(formData));

       try {
        const payload = {
          username : formData.name ,
          dob : selectedDate,
          gender : selectedGender
        }
        const response = await axios.patch(SERVICE_URL.UPDATE_USERNAME_WITH_GENDER_DOB, payload)
        // const dataSave = true;
        dispatch(setUserData(payload))
        navigate('/')
       } catch (error) {
        alert("some error occurred")
       }
      //  setFormData({
      //    name: "",
      //    email: "",
      //    password: "",
      //  });
     }
   };
   // checkName
   const checkName = async (value) => {
     let valid = false;
     const fieldInput = value.trim();
     if (!isRequired(fieldInput)) {
       setFormErrors({
         ...formErrors,
         name: "Username is required",
       });
     } else if(fieldInput){
const payload = {
  username: fieldInput
}
      try {
        const response = await axios.post(SERVICE_URL.USERNAME_VALIDATOR, payload)
        const isUsernameAvailable = response.data.response.statusEnum;
        if (isUsernameAvailable) {
          setFormErrors({
            ...formErrors,
            name: "",
          });
          valid = true;
        // console.log("🚀 ~ file: Index.jsx:154 ~ checkName ~ response:", response)

        }
        else{
          setFormErrors({
            ...formErrors,
            name: "Username is not available",
          });
          valid = true;
        }
      } catch (error) {
        setFormErrors({
          ...formErrors,
          name: "Unable to check username",
        });
      }
     } 
    //  else {
    //    setFormErrors({
    //      ...formErrors,
    //      name: "",
    //    });
    //    valid = true;
    //  }
     return valid;
   };
 
   const [userGuideLines, setuserGuideLines] = useState(false);
 
   const toggleUserGuidelines = (e) => {
     setuserGuideLines(!userGuideLines);
   };
   const [Calender, setCalender] = useState(false);
 
   const toggleCalender = (e) => {
     setCalender(!Calender);
   };
 
   const [selectedGender, setselectedGender] = useState("-Select-");
   const handleGender = (e) => {
     // console.log("🚀 ~ file: Index.jsx:193 ~ handleGender ~ e:", e);
     setGender(!Gender);
     setgenderError(false)
     setselectedGender(e);
   };
 
   const [Gender, setGender] = useState(false);
   const toggleGender = (e) => {
     setGender(!Gender);
   };
 
   const [focus, setFocus] = useState({
     username: false,
     dob: false,
     gender: false,
   });
 
 
 
   const userGuideLineRef = useRef(null);
   const dobRef = useRef(null);
   const genderDropdownRef = useRef(null);
   useEffect(() => {
     const handleOutsideClick = (event) => {
       if (dobRef.current && !dobRef.current.contains(event.target)) {
         setCalender(false);
       }
 
       if (
         genderDropdownRef.current &&
         !genderDropdownRef.current.contains(event.target)
       ) {
         setGender(false);
       }
       if (
         userGuideLineRef.current &&
         !userGuideLineRef.current.contains(event.target)
       ) {
         setuserGuideLines(false);
       }
     };
 
     document.addEventListener("click", handleOutsideClick);
 
     return () => {
       document.removeEventListener("click", handleOutsideClick);
     };
   }, []);
 
   const [selectedDate, setselectedDate] = useState(dob);
   const handleDate = (value) => {
     setCalender(false);
     const dateString = value.format();
 
     // Split into date and time
     const [datePart, timePart] = dateString.split("T");
 
     // Split the date into day, month, and year
     const [year, month, day] = datePart.split("-");
 
     // Create the desired format (dd/mm/yyyy)
     const formattedDate = `${day}/${month}/${year}`;
     setDOBError(false)
     setselectedDate(formattedDate);
 
     console.log(formattedDate); // Output: 11/11/2023
   };
 
   const [genderError, setgenderError] = useState(false);
   const [DOBError, setDOBError] = useState(false);
   return (
     <Box className="w-full max-w-[700px] rounded-lg border border-[#363636] p-5 md:p-[32px] lg:p-[58px] signin-form">
       <Box className="text-white max-w-[500px] mx-auto">
         <h1 className="text-lg lg:text-xl text-center font-heading mb-[36px]">
           {signUpType === "creator" ? "Become a Creator" : "Add Details"}
         </h1>
         <form className="auth-form mb-5" onSubmit={handleSubmit}>
           <div className="mb-4">
             <label
               htmlFor="name"
               className="font-medium text-white/[.80] text-sm"
               data-testid="Username"
             >
               Username
             </label>
             <div className="mt-2 relative" ref={userGuideLineRef} >
               <input
                 type="text"
                 placeholder={username}
                 name="name"
                 className={`rounded-lg w-full bg-transparent border border-white focus:border-[#FBBC5E] font-normal py-3 px-5 leading-normal font-semibold outline-none ${
                   formErrors.name ? "!border-error" : ""
                 } ${focus ? "" : ""}`}
                 id="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 onBlur={(e) => checkName(e.target.value)}
               />
               <span
                 className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                 onClick={(e) => toggleUserGuidelines(e)}
                 onMouseEnter={(e) => toggleUserGuidelines(e)}
                 onMouseLeave={(e) => toggleUserGuidelines(e)}
               >
                 <svg
                   width="22"
                   height="22"
                   viewBox="0 0 22 22"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <rect
                     x="0.75"
                     y="0.75"
                     width="20.5"
                     height="20.5"
                     rx="10.25"
                     stroke="white"
                     stroke-width="1.5"
                   />
                   <path
                     d="M10.4995 18V9.456H12.4995V18H10.4995ZM11.5075 8.048C11.1342 8.048 10.8248 7.93067 10.5795 7.696C10.3448 7.46133 10.2275 7.17867 10.2275 6.848C10.2275 6.50667 10.3448 6.224 10.5795 6C10.8248 5.76533 11.1342 5.648 11.5075 5.648C11.8808 5.648 12.1848 5.76 12.4195 5.984C12.6648 6.19733 12.7875 6.46933 12.7875 6.8C12.7875 7.152 12.6702 7.45067 12.4355 7.696C12.2008 7.93067 11.8915 8.048 11.5075 8.048Z"
                     fill="white"
                   />
                 </svg>
               </span>
 
             {userGuideLines && (
               <div className={`notification-dropdown popover absolute ${screenSize.width >1226 ? "top-4 right-1" : "top-8 right-4 rotate-90"} delay-200 transition`}>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="20"
                   height="23"
                   viewBox="0 0 20 23"
                   fill="none"
                 >
                   <path
                     d="M19.6752 0.847325L0.643729 11.8411L19.6803 22.826L19.6752 0.847325Z"
                     fill="#716046"
                   />
                 </svg>
               </div>
             )}
 
             {userGuideLines && (
               <div
                 data-testid="Username"
                 onBlur={toggleUserGuidelines}
                 className={`absolute ${screenSize.width > 1226 ? "top-0 -right-[350px]" : "-right-[0px]"} p-5 max-w-[357px] overflow-hidden z-[1] rounded-md bg-[#716046] backdrop-blur-sm`}
               >
                 <p className="text-[14px] text-[#FBBC5E] font-bold pb-[9px]">
                   Username Guidelines
                 </p>
                 <ul className="pl-5">
                   <li className="text-[14px] font-semibold list-disc">
                     There should be no spaces.
                   </li>
                   <li className="text-[14px] font-semibold list-disc">
                     Username should not start with a number.
                   </li>
                   <li className="text-[14px] font-semibold list-disc">
                     Username should only contain alphabets and numbers.
                   </li>
                   <li className="text-[14px] font-semibold list-disc">
                     Username should not contain any special character.
                   </li>
                 </ul>
               </div>
             )}
             </div>
 
             {formErrors.name && (
               <span className="text-error text-sm">{formErrors.name}</span>
             )}
 
           </div>
 
           <div className="mb-4">
             <p
               className="font-medium text-white/[.80] text-sm"
               data-testid="Date Of Birth"
             >
               Date Of Birth
             </p>
 
             <div className="mt-2 flex relative" ref={dobRef}>
               <div
                 className={`rounded-lg cursor-pointer w-full remove-icon bg-transparent border border-white focus:border-[#FBBC5E] font-normal py-3 px-5 leading-normal font-semibold outline-none ${
                   DOBError ? "!border-error" : ""
                 }`}
                 onClick={(e) => toggleCalender(e)}
               >
                 <div>{selectedDate}</div>
                 <span
                   data-testid="PasswordVisibility"
                   className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                   >
                     <path
                       d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                       fill={`${focus.dob ? "#FBBC5E" : "white"}`}
                     />
                   </svg>
                 </span>
                 {Calender && (
                   <div className="absolute bg-white text-black top-[51px] z-[4]">
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                       <DateCalendar
                         onChange={(newValue) => handleDate(newValue)}
                       />
                     </LocalizationProvider>
                   </div>
                 )}
               </div>
              
             </div>
             {DOBError && (
                 <span className="text-error text-sm">Please select DOB</span>
               )}
           
           </div>
 
         
 
           <div className="mb-6">
             <label
               htmlFor="Gender"
               className="font-medium text-white/[.80] text-sm"
               data-testid="Gender"
             >
               Gender
             </label>
             <div className="mt-2 flex relative date" ref={genderDropdownRef}>
               <div
                 className={`rounded-lg cursor-pointer w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                   genderError ? "!border-error" : ""
                 }`}
                 onClick={(e) => toggleGender(e)}
               >
                 {selectedGender}
               </div>
 
               <span
                 data-testid="Gender"
                 className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                 onClick={(e) => toggleGender(e)}
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                 >
                   <path
                     d="M19 8L12 15L5 8"
                     stroke="white"
                     strokeidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
               </span>
               {Gender && (
                 <div className="absolute w-full top-14 rounded-lg border border-[#FBBC5E] bg-[#332e28] z-[3] overflow-hidden">
                   <div
                     className={`w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10 hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                       formErrors.password ? "!border-error" : ""
                     }`}
                     onClick={() => {
                       handleGender("Male");
                     }}
                   >
                     Male
                   </div>
                   <div
                     className={` w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10  hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                       formErrors.password ? "!border-error" : ""
                     }`}
                     onClick={() => {
                       handleGender("Female");
                     }}
                   >
                     Female
                   </div>
                   <div
                     className={` w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10 hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                       formErrors.password ? "!border-error" : ""
                     }`}
                     onClick={() => {
                       handleGender("Others");
                     }}
                   >
                     Others
                   </div>
                 </div>
               )}
             </div>
             {genderError && (
               <span className="text-error text-sm">Please select gender</span>
             )}
           </div>
 
           <button
             type="submit"
             className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
             // disabled={!isFormValid()}
           >
             Save Details
           </button>
         </form>
       </Box>
     </Box>
   );
 };
 
 export default AddDetails;
 