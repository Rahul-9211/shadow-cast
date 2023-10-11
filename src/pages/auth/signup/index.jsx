import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  Item,
  OutlinedInput,
  Typography,
} from "@mui/material";

const SignUp = () => {
  return (
    <>
      <Box
        className="wrapper-container relative flex justify-center items-center w-full mx-24"
        height="700px"
      >
        <Box className="signin w-full mx-auto">
          <Box className="signin-form  flex justify-center items-center w-3/4 mx-auto flex-col">
            {/* <Box className="w-full"> */}
            <Typography
              variant="h6"
              className="authheading align-center font-normal text-sm pb-10"
            >
              Create User Account
            </Typography>

          <Box className="w-3/4">
          <FormControl
              sx={{ m: 1 }}
              variant="outlined"
              className="w-full mx-auto"
            >
              <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
                Name
              </FormHelperText>

              <OutlinedInput className="w-full border-white input-field m-auto" id="" />
            </FormControl>

            <FormControl
              sx={{ m: 1 }}
              variant="outlined"
              className="w-full mx-auto"
            >
              <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
                Email
              </FormHelperText>

              <OutlinedInput className="w-full border-white input-field m-auto" id="" />
            </FormControl>

            <FormControl
              sx={{ m: 1 }}
              variant="outlined"
              className="w-full mx-auto pb-10"
            >
              <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
                Password
              </FormHelperText>

              <OutlinedInput className="w-full border-white input-field m-auto" id="" />
            </FormControl>

           <Box className="w-full mx-auto create-account-btn">
           <Button  className="createBtn">Contained</Button>
           </Box>
          </Box>

            {/* </Box> */}
          </Box>
          <Box className="leftShadow"></Box>
          <Box className="rightShadow"></Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
