import React, { useState } from 'react';

import { Skeleton } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import img1 from 'assets/images/apt_1.png';
import p1 from 'assets/images/apt_1.png';
import p2 from 'assets/images/apt_1.png';
import p3 from 'assets/images/apt_1.png';

const MainCarousel = () => {
  const [image, setImage] = useState([
    { img: 'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_4.png' },
    // { img: 'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_5.png' },
    { img: 'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_6.png' },
    { img: 'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_7.png' },
    // { img: p1 },
  ]);

  const data =
    image &&
    image.length > 0 &&
    image?.map((a) => {
      return {
        image: a?.img,
      };
    });
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div className="slideCarousel ">
      {image?.length > 0 ? (
        <Carousel
          data={data}
          time={3000}
          width="100%"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={false}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          // dots={true}
          pauseIconColor="white"
          // pauseIconSize="40px"
          slideBackgroundColor="black"
          slideImageFit="contain"
          thumbnails={true}
          // thumbnailWidth="16.66%"
          // thumbnailHeight="100px"
          style={{
            textAlign: 'center',
            // border: '2px solid red',
            // width: '1200px',
            // width: '100%',
          }}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '500px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
};

export default MainCarousel;
