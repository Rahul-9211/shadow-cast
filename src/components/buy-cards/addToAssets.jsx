/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AddToAssets
 *@developer Sudhanshu
 */

 const AddToAssets = ({ title, price , handleClick , btnText}) => {
     return (
         <>
             <h4 className='text-white/[0.5] text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4>
             <button onClick={handleClick} type="button" className="font-bold rounded-lg border-[1.5px] border-sec justify-center w-full py-3 px-5 flex gap-2 mt-5 items-center">
                {btnText}</button>

                
         </>
     )
 }
 
 export default AddToAssets;