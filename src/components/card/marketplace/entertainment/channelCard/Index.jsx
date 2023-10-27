import { Box, Grid } from "@mui/material";
import Badge from "components/badges/videoCarousel/Index";
const Index = ({ title }) => {
  return (
    <Box className="max-w-md ">
     <img className="rounded-full" style={{height:"150px" , width:"150px"}} src="https://imgresizers.com/picture.webp"></img>
      <p className="mt-3 text-md font-bold mb-2 text-center ">{title}</p>
    </Box>
  );
};

export default Index;
