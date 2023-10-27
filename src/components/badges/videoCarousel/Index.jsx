import { Box, Grid } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
const Index = ({label}) => {
  return (
    <Box className=" max-w-md">
        {(()=>{
      if(label == "Unlock Premium"){
        return (  <button className="label-backgroud text-md font-semibold px-3 py-1 item-center flex item-center"> <LockOpenIcon className="mr-3 text-md"  /> 
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
