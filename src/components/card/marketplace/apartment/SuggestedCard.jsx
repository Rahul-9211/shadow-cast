import { Box, Grid } from "@mui/material";

const SuggestedCard = ({imgSrc , gradientSrc , heading , content , index}) =>{
    return (
        <Box
        className="rounded-xl flex-1 mr-8"
        key={index}
        sx={{
          padding: "15px",
          backgroundColor: "#32302D",
          marginBottom: "70px",
          zIndex: 5,
          position: "relative",
          overflow: "hidden",
        }}
        gap={3}
      >
        <Grid
          sx={{
            position: "absolute",
            top: "-57%",
            left: "-25%",
            height: "875px",
            width: "875px",
            zIndex: 0,
          }}
        >
          <img
            src={gradientSrc}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
        <Grid
          sx={{
            position: "absolute",
            top: "-57%",
            right: "-25%",
            height: "875px",
            width: "875px",
            zIndex: 0,
          }}
        >
          <img
            src={gradientSrc}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
        <Box
         
        >
          <img
            src={imgSrc}
            className="h-full w-full relative suggested-apartment-card-img"
            style={{ objectFit: "fill" , minHeight:"341px" }}
          />
        </Box>
        <Box
        >
          <h1
            className="text-xl font-bold c_white mt-4 mb-4 font-bold font-heading"
          >
           {heading}
          </h1>
          <Box className="flex justify-between items-start c_white">
            <p
              className="text-sm max-w-xl text-white text-opacity-70"
            >
              {content}
            </p>
          </Box>
        </Box>
      </Box>
    )
}

export default SuggestedCard;