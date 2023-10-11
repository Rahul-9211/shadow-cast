/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module GoogleButton 
 *@developer Sudhanshu
 */
import googleIcon from "assets/images/google-icon.png"
const GoogleLogin = (props) => {
    const { className, text, type, disabled, onClick } = props;
    return (
        <button className={`${className} bg-white py-3 px-5 w-full rounded-lg text-black font-medium tracking-[0.8px] font-inter flex items-center justify-center gap-3`} type={type} onClick={onClick} disabled={disabled}>
           <img src={googleIcon} alt="" className="mr-3 w-auto h-auto"/> {text}
        </button>
    );
}

export default GoogleLogin;
