/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
*/

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NotFound from "components/not-found/Index";
// import Apartments from 'pages/marketplace/apartments/Index';
// import Ships from "pages/marketplace/ships/Index";
// import Entertainments from 'pages/marketplace/entertainments/Index';

/* The code defines a functional component called `Index` that serves as a marketplace page with tabs. */
const Index = ({ value, element }) => {
  const navigate = useNavigate();
  const [allCategory] = useState([
    { label: 'Apartment', coming: false },
    { label: 'Ship', coming: false },
    { label: 'Entertainment', coming: false },
    { label: 'Clothing', coming: false },
    { label: 'Gaming', coming: false },
    { label: 'Companion', coming: false },
  ]);
  const [values, setValues] = useState(0);

  /**
   * The handleChange function is used to navigate to different pages based on the selected value.
   */
  const handleChange = (event, newValue) => {
    event.preventDefault();
    switch (newValue) {
      case 0:
        navigate('/marketplace/apartments');
        break;
      case 1:
        navigate('/marketplace/ships');
        break;
      case 2:
        navigate('/marketplace/entertainments');
        break;
      case 3:
        navigate('/marketplace/clothing/');
        break;
      case 4:
        navigate('/marketplace/gaming/');
        break;
      case 5:
        navigate('/marketplace/companions/');
        break;
      default:
        navigate('/marketplace/');
        break;
    }
  };

  useEffect(() => {
    if (value) setValues(+value);
  }, [value]);
  return (
    <div className='container app-container mx-auto px-2 md:px-3 xl:px-6 2xl:px-10 relative z-10'>
      <ul className="flex overflow-x-auto text-sm md:text-base font-semibold text-center py-5 px-2 md:py-8 md:px-4" data-testid="tablist">
        {allCategory?.map((category, i) => (
          <li className="mr-8" key={i} role='tab'>
            <a href="#" onClick={e => handleChange(e, i)} aria-current={(values === i) ? 'page' : ''} className={`inline-block text-[#7A7A7A] hover:text-white ${(values === i) ? 'text-white' : ''}`}>
              {
                !category?.coming ? (
                  category?.label
                ) : (
                  <>
                    {category?.label}
                    <span
                      className="ml-2 text-xs clip-text font-medium whitespace-nowrap"
                    >
                      Coming soon
                    </span>
                  </>
                )
              }

            </a>
          </li>
        ))}
      </ul>
      <div className='marketplace_tabs'>
        {element ? element : <NotFound className="h-screen" />}
      </div>
    </div>
  );
};

export default Index;