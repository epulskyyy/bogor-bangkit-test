import React from 'react'
import { Carousel, Radio } from 'antd';
import { DotPosition } from 'antd/lib/carousel';
import { Style } from 'util';

const contentStyle :any = {
  height: '286px',
  color: '#BDBDBD',
  lineHeight: '286px',
  textAlign: 'center',
  background: '#F2F2F2',
};
type Props={

}

const Banner :React.FC<Props> =()=> {

  return (
    <>
      <Carousel className="peb-carousel" autoplay dotPosition="left">
        <div>
          <h3 style={contentStyle}>BANNER 1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>BANNER 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>BANNER 3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>BANNER 4</h3>
        </div>
      </Carousel>
    </>
  );
}

export default Banner
