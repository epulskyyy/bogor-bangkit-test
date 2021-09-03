import { Avatar, Image } from "antd";
import React from "react";

import IcWhatsapp from '../../../assets/peb-whatsapp.svg'
import IcFb from '../../../assets/peb-fb.svg'
import IcIg from '../../../assets/peb-ig.svg'

export default function Umkm() {
  return (
    <div>
      <div className="peb-user">
        <div className="peb-user-avatar">
          <Avatar
            src={
              <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
          />
        </div>
        <div className="peb-user-name">
          <h3>Nama Umkm</h3>
        </div>
      </div>
      <div className="peb-whatsapp mb-1">
         <a className="peb-link-whatsapp"> <img src={IcWhatsapp}/> 089123123123</a>
         <a className="peb-link-whatsapp"> <img src={IcWhatsapp}/> 089123123123</a>
      </div>
      <div className="peb-social">
         <a className="peb-link-social mr-1"> <img src={IcFb}/></a>
         <a className="peb-link-social mr-1"> <img src={IcIg}/></a>
      </div>
    </div>
  );
}
