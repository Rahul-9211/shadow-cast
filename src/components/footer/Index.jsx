/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Footer Component
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */

import React from 'react';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
// footer
const Index = () => {
  return (
    <Grid
      container
      item
      xs={12}
      className="bg-dark"
    >
      <Grid container item xs={12} className="h-full flex justify-center px-4">
        <div className="text-xs flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center py-[34px] md:py-[68px] flex-1">
          <div className='flex flex-wrap gap-4 md:gap-8 justify-center items-center relative z-10'>
            <NavLink to="#" data-testid='link-privacy' className='text-white leading-relaxed'>Privacy Policy</NavLink>
            <NavLink to="#" data-testid='link-terms' className='text-white leading-relaxed'>Terms &amp; Condition</NavLink>
          </div>
          <div className='flex flex-wrap gap-4 md:gap-8 md:ml-4 justify-center items-center relative z-10'>
            <NavLink to="#" className='text-white' title='Instagram' data-testid="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor" />
              </svg>
            </NavLink>
            <NavLink to="#" className='text-white' title="Facebook" data-testid="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_162_5167)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4.00014 10.4605 4.44451 8.95364 5.27979 7.66038C6.11506 6.36712 7.30576 5.34234 8.70901 4.70901C10.1123 4.07568 11.6684 3.8607 13.1908 4.08987C14.7132 4.31904 16.1372 4.98262 17.2918 6.00099C18.4464 7.01936 19.2826 8.34926 19.7002 9.83111C20.1177 11.313 20.0988 12.8838 19.6457 14.3552C19.1926 15.8265 18.3246 17.1359 17.1458 18.1262C15.967 19.1165 14.5275 19.7456 13 19.938V14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H13V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H14.5C14.7652 9 15.0196 8.89464 15.2071 8.70711C15.3946 8.51957 15.5 8.26522 15.5 8C15.5 7.73478 15.3946 7.48043 15.2071 7.29289C15.0196 7.10536 14.7652 7 14.5 7H14C13.2044 7 12.4413 7.31607 11.8787 7.87868C11.3161 8.44129 11 9.20435 11 10V12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14H11V19.938C9.0667 19.6942 7.28882 18.7533 6 17.2917C4.71119 15.8302 4.00003 13.9486 4 12ZM12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_162_5167">
                    <rect width="24" height="24" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
            <NavLink to="#" className='text-white' title="youtube" data-testid="youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7ZM2 8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8ZM10 9L14 12L10 15V9Z" fill="currentColor" />
              </svg>
            </NavLink>
            <NavLink to="#" className='text-white' title='twitter' data-testid="twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.7512 3H20.818L14.1179 10.6246L22 21H15.8275L10.9936 14.7074L5.46266 21H2.39401L9.56038 12.8446L2 3H8.32735L12.6967 8.75169L17.7493 3H17.7512ZM16.6748 19.1723H18.3742L7.4049 4.73169H5.58133L16.6748 19.1723Z" fill="white" />
              </svg>
            </NavLink>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Index;
