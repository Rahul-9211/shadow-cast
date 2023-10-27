import { Box, Grid } from "@mui/material";
import Badge from "components/badges/videoCarousel/Index";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import bgGrey from "../../../../../assets/images/bgGrey.png";

const Index = ({ title, labelStatus, label, videoURL }) => {
  return (
    <Box className="video-carousel-card max-w-xs relative max-h-36">
      <Box className="relative overflow-hidden rounded-xl bg-gray-800 max-h-36">
        <img src={bgGrey}></img>

        <p className="music-icon-background bg-opacity-10 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm px-2">
          <MusicNoteIcon />
        </p>
      </Box>

      <Box className="pl-1 ">
        <p className="mt-3 text-sm mb-2 ">{title}</p>
        <Badge label={label} />
      </Box>
    </Box>
  );
};

export default Index;
