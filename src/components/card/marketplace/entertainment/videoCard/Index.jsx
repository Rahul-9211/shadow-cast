import { Box, Grid } from "@mui/material";
import Badge from "components/badges/videoCarousel/Index";
import bgGrey from "../../../../../assets/images/bgGrey.png";
const Index = ({ title, labelStatus, label, videoURL  , VolcapStatus}) => {
  return (
    <Box className="video-carousel-card max-w-md relative">
      <Box className="video-player max-w-md overflow-hidden rounded-xl max-h-56 min-w-fit bg-gray-800">
        <img src={bgGrey}></img>
       {VolcapStatus ?  <p className="volcap-background absolute top-5 right-5 text-sm px-2 text-center">
          Volcap
        </p> : <></>}
      </Box>

      <Box className="pl-1 ">
        <p className="mt-3 text-sm mb-2 ">{title}</p>
        <Badge label={label} />
      </Box>
    </Box>
  );
};

export default Index;
