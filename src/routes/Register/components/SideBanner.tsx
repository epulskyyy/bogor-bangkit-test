import React from "react";

import BackImgRegCloud from "../../../assets/peb-bac-reg-cloud.svg";
import BackImgReg from "../../../assets/peb-bac-reg-child.svg";
import Logo from "../../../components/Logo/Logo";

const SideBanner = () => {
  return (
    <>
      <div className="register-bac-icon">
        <img
          alt=""
          className="register-bac-icon-cloud"
          height="120px"
          src={BackImgRegCloud}
        />
        <img
          alt=""
          className="register-bac-icon-reg mt-2"
          height="352.12px"
          src={BackImgReg}
        />
      </div>
      <div className="peb-dflex-align-center ">
        <Logo size="small" />
        <h4
          className="peb-text-bold ml-1 peb-text-white"
          style={{ margin: "0px" }}
        >
          Bogor Bangkit
        </h4>
      </div>
    </>
  );
};

export default SideBanner;
