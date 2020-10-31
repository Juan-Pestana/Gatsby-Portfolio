import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../assets/dreamstime_pequeño.svg';
 
const HeroImg = () => (
  <ReactVivus
    id="my-div"
    option={{
      file: "https://res.cloudinary.com/pestana/image/upload/v1603975011/dreamstime_peque%C3%B1o_mbm91f.svg",
      animTimingFunction: 'EASE',
      duration: 2000,
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '400px', width: '600px' }}
    callback={console.log}
  />
);
export default HeroImg;
 