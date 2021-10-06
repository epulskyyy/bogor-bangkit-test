import React, { useEffect, useState } from "react";
import { List, Avatar, Button, Select, Spin } from "antd";
import {
  CaretDownOutlined,
  FullscreenOutlined,
  SearchOutlined,
  SendOutlined,
} from "@ant-design/icons";
import IcNoChat from "../../assets/peb-nochat.svg";
import { UserInfo } from "../../models/ChatOnly";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateChatRequest,
  getAllUserChatRequest,
  getHistoryChatRequest,
  sendChatRequest,
} from "../../actions/chat";
import { RootState } from "../../models/RootState";

type Props = {
  isOpen: any;
  setIsOpen: any;
};

const ChatCollapse: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { userList, dataMessage, selectedUserID, inputMessage } = useSelector(
    (state: RootState) => state.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserChatRequest());
  }, []);

  const pickUser = (userInfo: UserInfo) => {
    dispatch(changeStateChatRequest("selectedUserID", userInfo));
    dispatch(changeStateChatRequest("inputMessage", ""));
    let requestBody = {
      pageNumber: 0,
      pageSize: 999999,
      receiver: userInfo.id,
    };
    dispatch(getHistoryChatRequest(requestBody));
  };
  const sendMessage = () => {
    let requestBody = {
      content: inputMessage,
      receiver: selectedUserID.id,
    };
    dispatch(sendChatRequest(requestBody));
  };
  const debounceFetcher = (name: any) => {
    // dispatch(get({ ...queryData, name }));
  };

  const scrollToBottom = () => {
    var myDiv: any = document.getElementById("content-discus");
    myDiv.scrollTop = myDiv.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div
      id="pebChatCollape"
      style={{ display: isOpen ? "" : "none" }}
      className={"peb-chat-collapse " + (isOpen ? "" : "hide")}
    >
      <div className="peb-chat-sidebar">
        <div className="peb-chat-sidebar-header">
          <h3>Chat</h3>
          <Button type="text" icon={<FullscreenOutlined />} />
        </div>
        <div className="peb-chat-sidebar-content">
          {userList ? (
            <List
              itemLayout="horizontal"
              dataSource={userList.data.response}
              renderItem={(item: any) => (
                <List.Item
                  className="peb-list-chat"
                  onClick={() => pickUser(item.conversationWith)}
                >
                  <List.Item.Meta
                    title={(
                      item.conversationWith.namaUmkm ||
                      item.conversationWith.email
                    ).substring(0, 20)}
                    description={item.content.substring(0, 15) + "..."}
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
          {userList ? (
            <h3>{selectedUserID?.namaUmkm || selectedUserID?.email}</h3>
          ) : (
            <div></div>
          )}
          <Button
            onClick={setIsOpen}
            type="text"
            icon={<CaretDownOutlined />}
          />
        </div>
        <div className="peb-chat-content-content">
          {/* {dataMessage ? ( */}
          <div style={{ display: dataMessage ? "" : "none" }}>
            <div
              style={{ display: dataMessage ? "" : "none" }}
              id="content-discus"
              className="peb-chat-content-discus"
            >
              {dataMessage?.data.response.data?.map((item: any) =>
                selectedUserID.id !== item.sender ? (
                  <div className="peb-chat-content-discus-sender mt-1 mb-1">
                    <label>{item.content}</label>
                  </div>
                ) : (
                  <div className="peb-chat-content-discus-receiver mt-1 mb-1">
                    <label>{item.content}</label>
                  </div>
                )
              )}
            </div>
            <div className="peb-chat-content-text">
              <input
                value={inputMessage}
                placeholder="Ketik pesan.."
                className="peb-chat-content-text-input"
                onChange={(v: any) =>
                  dispatch(
                    changeStateChatRequest("inputMessage", v.target.value)
                  )
                }
              />
              <Button
                onClick={sendMessage}
                type="text"
                icon={<SendOutlined />}
              />
            </div>
          </div>
          <div
            className="peb-chat-content-content-nodata"
            style={{ display: dataMessage ? "none" : "" }}
          >
            <img src={IcNoChat} alt="" />
            <h3>Selamat Datang di Chat</h3>
            <label>Pilih pesan untuk memulai percakapan</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCollapse;
