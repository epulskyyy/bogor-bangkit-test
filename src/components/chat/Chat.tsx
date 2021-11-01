import { WechatOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../models/RootState";
import ChatCollapse from "./ChatCollapse";
import "./styles.scss";

type Props = {
  authedData?: any;
};
const Chat: React.FC<Props> = ({ authedData }) => {
  const [isOpen, setisOpen] = useState(false);
  const { notificationCount, isLoadingWs } = useSelector(
    (state: RootState) => state.chat
  );

  const openChat = () => {
    const fabElement: any = document.getElementById("peb-chat-btn");
    const fabColElement: any = document.getElementById("pebChatCollape");
    const height = window.innerHeight;
    fabElement.classList.toggle("fab-active");
    if (Number(fabElement.style.left.replace("px", "")) < 50) {
      fabColElement.style.left = "0px";
      fabColElement.style.right = "unset";
    } else {
      fabColElement.style.left = "unset";
      fabColElement.style.right = "0px";
    }
    if (
      height - Number(fabElement.style.top.replace("px", "")) < 200 ||
      Number(fabElement.style.top.replace("px", "")) === 0
    ) {
      fabColElement.style.bottom = "10px";
      fabColElement.style.top = "unset";
    } else {
      fabColElement.style.bottom = "unset";
      fabColElement.style.top = "0px";
    }
    console.log(fabElement.style.left);
    console.log(fabColElement.style.left);

    setisOpen(true);
  };
  const closeChat = () => {
    const fabElement: any = document.getElementById("peb-chat-btn");

    setisOpen(false);
    fabElement.classList.remove("fab-active");
  };
  return isLoadingWs ? null : (
    <div id="peb-chat-btn" className="peb-chat">
      {notificationCount !== 0 ? (
        <div className={"peb-chat-notification " + (isOpen ? "hide" : "")}>
          <Badge
            overflowCount={10}
            count={notificationCount !== 0 ? notificationCount : 0}
          />
        </div>
      ) : null}

      <button
        className={"peb-chat-btn " + (isOpen ? "hide" : "")}
        onClick={openChat}
      >
        <WechatOutlined style={{ fontSize: "32px" }} /> Pesan
      </button>
      <ChatCollapse
        isModal={true}
        isOpen={isOpen}
        setIsOpen={closeChat}
        authedData={authedData}
      />
    </div>
  );
};
export default Chat;
