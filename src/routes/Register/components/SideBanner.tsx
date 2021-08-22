import React from "react";

import BackImgRegCloud from '../../../assets/peb-bac-reg-cloud.svg'
import BackImgReg from '../../../assets/peb-bac-reg-child.svg'

const SideBanner = () => {
  return (
    <>
      <div className="register-bac-icon">
        <img
          className="register-bac-icon-cloud"
          height="120px"
          src={BackImgRegCloud}
        />
        <img
          className="register-bac-icon-reg"
          height="352.12px"
          src={BackImgReg}
        />
      </div>
      <h3 className="peb-logo">Logo Web</h3>
    </>
  );
};

export default SideBanner;
