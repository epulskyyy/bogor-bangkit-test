import React from "react";
import { Image } from 'antd';
import BgImage from '../assets/bg-empty.png'

const Background = () => {
  return (
    <Image width={'100%'} height={'100%'} src={BgImage} />
  );
};

export default Background;
