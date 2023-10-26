import { Box, Grid } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
const Index = ({label}) => {
  return (
    <Box className=" max-w-md">
        {(()=>{
      if(label == "Unlock Premium"){
        return (  <button className="label-backgroud text-md font-semibold px-3 py-1 item-center"> <LockOpenIcon className="mr-4" sx={{width:"24px" , height:"24px"}} /> 
        {label}</button>)
      }
      else return <button className="label-backgroud text-md font-semibold px-3 py-1">
      {label}
       </button>
       
      
     })()}
     {/* <button className="label-backgroud text-md font-bold px-3 py-1">
    {label}
     </button> */}
    </Box>
  );
};

export default Index;
