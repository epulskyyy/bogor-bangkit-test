import React from "react";
import { List, Avatar, Button } from "antd";
import {
  CaretDownOutlined,
  FullscreenOutlined,
  SendOutlined,
} from "@ant-design/icons";
import IcNoChat from "../../assets/peb-nochat.svg";

type Props={
  isOpen:any
  setIsOpen:any
}

const ChatCollapse:React.FC<Props> =({isOpen,setIsOpen})=> {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <div className={"peb-chat-collapse "+(isOpen ? "":"hide")}>
      <div className="peb-chat-sidebar">
        <div className="peb-chat-sidebar-header">
          <h3>Chat</h3>
          <Button type="text" icon={<FullscreenOutlined />} />
        </div>
        <div className="peb-chat-sidebar-content">
          {false ? (
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar alt="" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={"Nama UMKM".substring(0, 20)}
                    description={
                      "Ant Design, a design language for background applications, is refined by Ant UED Team".substring(
                        0,
                        15
                      ) + "..."
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <div className="peb-chat-sidebar-content-nodata">
              <label>tidak ada pesan</label>
            </div>
          )}
        </div>
      </div>
      <div className="peb-chat-content">
        <div className="peb-chat-content-header">
          {false ? <h3>Nama UMKM</h3> : <div></div>}
          <Button onClick={setIsOpen} type="text" icon={<CaretDownOutlined />} />
        </div>
        <div className="peb-chat-content-content">
          {false ? (
            <>
              <div className="peb-chat-content-discus">
                <div className="peb-chat-content-discus-sender mt-1 mb-1">
                  <label>Hallo</label>
                </div>
                <div className="peb-chat-content-discus-receiver mt-1 mb-1">
                  <label>Hallo</label>
                </div>
              </div>
              <div className="peb-chat-content-text">
                <input
                  placeholder="Ketik pesan.."
                  className="peb-chat-content-text-input"
                />
                <Button type="text" icon={<SendOutlined />} />
              </div>
            </>
          ) : (
            <div className="peb-chat-content-content-nodata">
              <img src={IcNoChat} alt=""/>
              <h3>Selamat Datang di Chat</h3>
              <label>Pilih pesan untuk memulai percakapan</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatCollapse