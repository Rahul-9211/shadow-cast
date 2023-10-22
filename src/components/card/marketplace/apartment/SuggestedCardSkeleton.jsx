import { Box, Grid, Skeleton } from "@mui/material";

const SuggestedCardSkeleton = ({gradientSrc}) =>{
    return (
        <Box
        className="rounded-xl flex-1 mr-8"
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
           <Skeleton
           className="h-full w-full relative suggested-apartment-card-img"
           variant="rectangular"
           width="100%"
           height="341px"
           sx={{
             objectFit:"fill",
             bgcolor: "#1A2237",
             width: "100%",
             borderRadius: "10px 10px 0 0 ",
           }}
         />
        </Box>
        <Box
        >
          <Skeleton width="40%" sx={{ bgcolor: "grey.600" , 
            marginTop:"10px",}} />
          <Box className="flex justify-between items-start c_white">
          <Skeleton sx={{ bgcolor: "grey.600" }} width="100%" />
          </Box>
        </Box>
      </Box>
    )
}

export default SuggestedCardSkeleton;