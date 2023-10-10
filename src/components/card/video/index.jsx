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
component called `Index` that renders a Video cards UI. */
const Index = ({ data, key, redirect }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={5.5}
        // md={5}
        lg={3.65}
        className="flex flex-row gap-y-3  rounded-2xl cursor-pointer"
        key={key}
        onClick={() => navigate(`${redirect}/:id`)}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#1A2237',
            minHeight: '230px',
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
