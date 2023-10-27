import { Box, Grid } from "@mui/material";
import Badge from "components/badges/videoCarousel/Index";
import earth from "../../../../../assets/images/earth.png";

const Index = ({ title }) => {
  return (
    <Box className="max-w-md mr-3">
     <img className="rounded-full h-36 w-36 sm:h-40 sm:w-40 " src={earth}></img>
      <p className="mt-3 text-md font-bold mb-2 text-center ">{title}</p>
    </Box>
  );
};

export default Index;
