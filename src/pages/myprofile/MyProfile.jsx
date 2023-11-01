import PasswordModal from "components/Modal/UserProfile/PasswordModal";
import { useState, useRef } from "react";
import UserAvatarImg from 'assets/images/myassets/Ellipse 2.png'

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module User-MyProfile-Component
 *@developer Aditya P
 */

const MyProfile = () => {
  const focusRef = useRef(null);
  const [isformEditable, setFormEditable] = useState(false);
  const [isModalStatus, setModalstatus] = useState(false);
  const [formaData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
  });

  const [isAvatarChange, setAvatarChange] = useState(false)

  const IsFormEditable = () => {
    setFormEditable(!isformEditable);
    focusRef.current?.focus();

    // Save the details of already sign in user data from an API by default
    setFormData((prev) => {
      return {
        firstname: prev.firstname,
        lastname: prev.lastname,
      }
    });
  };

  const handleChange = (e) => {
    setFormData(() => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleModal = () => {
    setModalstatus(!isModalStatus);
  };

  const handleSave = () => {
    setFormEditable(!isformEditable);
    setFormData({
      firstname: formaData.firstname,
      lastname: formaData.lastname,
    });
  }

  return (
    <div className="__my_profile_main container mx-auto px-[300px] py-[55px] max-[768px]:px-[15px] max-[1280px]:px-0">
      <div className="__my_avatar_main ">
        <h5 className="text-[24px] max-[768px]:text-[18px]">User Profile</h5>
        <div className="__avatar_container py-[30px]">
          <div className="__avatar bg-[#4B4B4B] w-[100px] h-[100px] rounded-[50%] max-[768px]:w-[80px] max-[768px]:h-[80px]">{isAvatarChange ? <img src={UserAvatarImg} alt="user_avatar_logo" /> : ""}</div>
          <div className={`__edit_avatar py-[15px] text-[12px] max-[768px]:text-[10px] flex gap-[15px] [&>span]:hover:cursor-pointer`}>
           {isAvatarChange ?  <>
            <span className="text-[#FBBC5E]">Replace</span>
            <span className="text-[#7A7A7A]" onClick={() => setAvatarChange(!isAvatarChange)}>Remove</span>
            </> : <div className="w-[100px] text-center max-[768px]:w-[80px]"><span className="text-[#FBBC5E] text-[14px] max-[768px]:text-[12px] hover:cursor-pointer" onClick={() => setAvatarChange(!isAvatarChange)}>Upload</span></div>}
          </div>
        </div>
      </div>

      <div className="__profile_form_main">
        <h5 className="font-medium text-[18px] max-[768px]:text-[16px]">
          Details
        </h5>
        <div className="__form_container">
          <form onSubmit={() => {}} className="__myprofile_form">
            <div className="__firstname_field flex flex-col pt-[20px]">
              <label
                className="font-light text-[14px] max-[768px]:text-[12px]"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                disabled={!isformEditable}
                ref={focusRef}
                className="bg-transparent mt-[5px] w-[500px] max-[768px]:w-[100%] max-[768px]:ml-0 ml-[3px] rounded-[8px] border border-[#FFFFFF1A] py-[10px] px-[15px] focus:border-[#51A2FF] outline-none"
                type="text"
                name="firstname"
                placeholder="John"
                onChange={isformEditable ? handleChange : () => {}}
                value={formaData.firstname}
              />
            </div>

            <div className="__lastname_field flex flex-col pt-[20px]">
              <label
                className="font-light text-[14px] max-[768px]:text-[12px]"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                disabled={!isformEditable}
                className="bg-transparent w-[500px] max-[768px]:w-[100%] max-[768px]:ml-0 mt-[5px] ml-[3px] rounded-[8px] border border-[#FFFFFF1A] py-[10px] px-[15px] focus:border-[#51A2FF] outline-none"
                type="text"
                name="lastname"
                placeholder="John"
                onChange={isformEditable ? handleChange : () => {}}
                value={formaData.lastname}
              />
            </div>
          </form>
          <div className="__edit_form_button pt-[30px] ml-[3px]">
            {isformEditable ? (
              <div className="__editable__button_group flex gap-[20px]">
                <button
                  onClick={IsFormEditable}
                  className="bg-[#7A7A7A] max-[768px]:text-[12px] text-[#fff] py-[4px] px-[14px] rounded-[6px] text-[14px]"
                >
                  Cancel
                </button>
                <button onClick={handleSave} className="bg-[#F3A151] max-[768px]:text-[12px] font-medium text-[#000] py-[4px] px-[22px] rounded-[6px] text-[14px]">
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={IsFormEditable}
                className="border-[2px] border-[#FBBC5E] max-[768px]:text-[10px] py-[2px] px-[25px] rounded-[7px] font-medium text-[12px] hover:bg-[#FBBC5E4D] 
                            hover:text-[#fff] 
                            hover:border-[#FBBC5E4D]"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="__profile__setting_main pt-[100px] max-[768px]:pt-[70px]">
        <h5 className="font-medium text-[18px]">Account Setting</h5>
        <div className="__setting_data">
          <div className="__email_data pt-[25px]">
            <h5 className="text-[14px] max-[768px]:text-[12px] font-light">
              Email
            </h5>
            <p className="text-[16px] max-[768px]:text-[14px] max-[768px]:mt-[10px] max-[1280px]:mt-[10px]">
              Sam2023@gmail.com
            </p>
          </div>
          <div className="__pass_data mt-[50px] max-[768px]:mt-[30px]">
            <h5>Password</h5>
            <div className="flex gap-[15px] mt-[20px] max-[768px]:mt-[15px]">
              <p className="text-[14px] h-[30px] leading-[30px] mt-[2px] tracking-[3px] max-[768px]:text-[12px] max-[768px]:tracking-[2px]">
                ***********
              </p>
              <button
                onClick={() => {
                  setModalstatus(!isModalStatus);
                }}
                className="text-[16px] text-[#FBBC5E] hover:underline max-[768px]:text-[14px]"
              >
                Change
              </button>
              <p className="text-[16px] text-[#FFFFFF80] mt-[4px] max-[768px]:text-[13px] max-[768px]:mt-[9px]">
                (last changed 23/09/24)
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalStatus ? (
        <PasswordModal
          handleModalStatus={handleModal}
          modalStatus={isModalStatus}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyProfile;
