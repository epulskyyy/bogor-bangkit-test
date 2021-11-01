import React from "react";
import { Link } from "react-router-dom";
import BogorBangkitLogo from "../../assets/img/bogor-bangkit.png";

import "./styless.scss";

type Props = {
  size: "small" | "medium" | "large";
  path?: string;
};
const Logo: React.FC<Props> = ({ size, path }) => {
  return (
    <Link to={path || ""} className={"logo-bogor-bangkit " + size}>
      <img
        height={
          size === "small" ? "50px" : size === "medium" ? "100px" : "200px"
        }
        src={BogorBangkitLogo}
        alt="bogor-bankit"
      />
      <span>BB</span>
    </Link>
  );
};
export default Logo;
