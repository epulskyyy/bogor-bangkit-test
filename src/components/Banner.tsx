import React from "react";
import { Carousel, Radio } from "antd";
import { DotPosition } from "antd/lib/carousel";
import { Style } from "util";
import { useSelector } from "react-redux";
import { RootState } from "../models/RootState";

const contentStyle: any = {
  height: "286px",
  color: "#BDBDBD",
  lineHeight: "286px",
  textAlign: "center",
  background: "#F2F2F2",
  backgroundImage:
    "url(" +
    "https://th.bing.com/th/id/OIP.lb1xLceK0E3AlWOLCsiIXAHaEK?pid=ImgDet&rs=1" +
    ")",
};
type Props = {};

const Banner: React.FC<Props> = () => {
  const banner = useSelector((state: RootState) => state.banner);

  return (
    <>
      <Carousel className="peb-carousel" autoplay dotPosition="left">
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
