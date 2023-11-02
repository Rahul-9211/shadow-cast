/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Header
 *@developer Sudhanshu <sudhanshut@instaacoders.com>>
 */
 /* nav bar */
 const Index = () => {
   // const navigate = useNavigate();
   return (
    <div className='flex sm:mt-40 flex-col gap-3 items-center justify-center'>
    <p className='font-heading font-semibold clip-text'>Coming Soon</p>
    <p className='text-[#7A7A7A] font-semibold text-center'>Try exploring other exciting contents in marketplace.</p>
    <a to="/marketplace" className="border-[1.5px] border-sec text-sm mt-4 rounded-lg max-w-[250px] hover:bg-sec hover:text-dark font-bold text-center w-full py-3 px-4">Browse other content</a>
  </div>
   );
 };
 
 export default Index;
 