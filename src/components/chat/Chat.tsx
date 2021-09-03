import { WechatOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ChatCollapse from "./ChatCollapse";
import "./styles.scss";

export default function Chat() {
  const [isOpen, setisOpen] = useState(false);
  const openChat = () => {
    setisOpen((v) => !v);
  };
  return (
    <div className="peb-chat">
      <button
        className={"peb-chat-btn " + (isOpen ? "hide" : "")}
        onClick={openChat}
      >
        <WechatOutlined /> Chat
      </button>
      {isOpen ? <ChatCollapse isOpen={isOpen} setIsOpen={openChat} /> : null}
    </div>
  );
}
