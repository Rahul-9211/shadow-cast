/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';



/*It defines a
component called `Index` that renders a Music cards UI. */
const Index = ({ data, key }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        item
        xs={5}
        sm={3.5}
        md={3}
        lg={2}
        className="flex flex-row gap-y-3 rounded-2xl cursor-pointer"
        key={key}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#1A2237',
            minHeight: '200px',
            minWidth: '180px',
          }}
          className=" rounded-2xl "
        ></Grid>
        <Grid item xs={12} className="pl-1">
          <Typography className="fs12px">{data?.name || 'Test'}</Typography>
          <Typography
            className={`fs14px font-bold ${!data?.price && 'c_25B39E'}`}
          >
            {data?.price ? `US$ ${data?.price}` : 'Free'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
