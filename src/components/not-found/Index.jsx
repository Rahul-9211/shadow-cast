/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Header
 *@developer Sudhanshu 
 */
/* nav bar */
import { NavLink } from "react-router-dom";
const Index = ({className}) => {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center ${className ? className : "sm:mt-40"}`}>
      <p className='font-heading font-semibold clip-text'>Coming Soon</p>
      <p className='text-[#7A7A7A] font-semibold text-center'>Try exploring other exciting contents in marketplace.</p>
      <NavLink to="/marketplace" className="border-[1.5px] border-sec text-sm mt-4 rounded-lg max-w-[250px] hover:bg-sec hover:text-dark font-bold text-center w-full py-3 px-4">Browse other content</NavLink>
    </div>
  );
};

export default Index;
