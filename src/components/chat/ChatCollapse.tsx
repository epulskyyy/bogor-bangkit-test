import React, { useEffect, useState } from "react";
import { List, Button } from "antd";
import {
  CaretDownOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
import history from "../../utils/history";

type Props = {
  isOpen?: any;
  setIsOpen?: any;
  isModal?: any;
};

const ChatCollapse: React.FC<Props> = ({ isOpen, setIsOpen, isModal }) => {
  const { userList, dataMessage, selectedUserID, inputMessage } = useSelector(
    (state: RootState) => state.chat
  );
  const [collapseSide, setCollapseSide] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserChatRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickUser = (userInfo: UserInfo) => {
    var availableWidth = window.innerWidth;
    console.log('====================================');
    console.log(availableWidth <= 471);
    console.log('====================================');
    
    dispatch(changeStateChatRequest("selectedUserID", userInfo));
    dispatch(changeStateChatRequest("inputMessage", ""));
    let requestBody = {
      pageNumber: 0,
      pageSize: 999999,
      receiver: userInfo.id,
    };
    dispatch(getHistoryChatRequest(requestBody));
    if (availableWidth <= 471) {
      setCollapseSide(false);
    }
  };
  const sendMessage = (e: any) => {
    e.preventDefault();
    let requestBody = {
      content: inputMessage,
      receiver: selectedUserID.id,
    };
    dispatch(sendChatRequest(requestBody));
  };

  useEffect(() => {}, []);
  return (
    <div
      id="pebChatCollape"
      style={{ display: isModal ? (isOpen ? "" : "none") : "flex" }}
      className={
        isModal
          ? isOpen
            ? "peb-chat-collapse "
            : "peb-chat-collapse hide"
          : "peb-chat-collapse page-view"
      }
    >
      <div className={"peb-chat-sidebar" + (collapseSide ? "" : " hide")}>
        <div className="peb-chat-sidebar-header">
          {isModal ? (
            <>
              <h3>Pesan</h3>
              <Button
                type="text"
                onClick={() => history.push("/chat")}
                icon={<FullscreenOutlined />}
              />
            </>
          ) : (
            <>
              <h3>Pesan</h3>
              <Button
                type="text"
                onClick={() => setCollapseSide(false)}
                icon={<MenuFoldOutlined />}
              />
            </>
          )}
        </div>
        <div className="peb-chat-sidebar-content">
          {userList ? (
            <List
              itemLayout="horizontal"
              dataSource={userList.data.response}
              renderItem={(item: any) => (
                <List.Item
                  className={`peb-list-chat ${
                    item.conversationWith.email === selectedUserID?.email
                      ? "active"
                      : ""
                  }`}
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
      <div
        className={"peb-chat-content" + (collapseSide ? "" : " show")}
        style={{
          width: collapseSide ? "" : "100%",
        }}
      >
        <div className="peb-chat-content-header">
          {collapseSide ? null : (
            <Button
              type="text"
              onClick={() => setCollapseSide(true)}
              icon={<MenuUnfoldOutlined />}
            />
          )}
          {userList ? (
            <h3>{selectedUserID?.namaUmkm || selectedUserID?.email}</h3>
          ) : (
            <div></div>
          )}
          {isModal ? (
            <Button
              onClick={setIsOpen}
              type="text"
              icon={<CaretDownOutlined />}
            />
          ) : null}
        </div>
        <div className="peb-chat-content-content">
          {/* {dataMessage ? ( */}
          <div style={{ display: dataMessage ? "" : "none" }}>
            <div
              style={{ display: dataMessage ? "" : "none" }}
              className="peb-chat-content-discus"
              id="content-discus"
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
              <form onSubmit={sendMessage}>
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
                  className="mr-1"
                  onClick={sendMessage}
                  type="text"
                  icon={<SendOutlined />}
                />
              </form>
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
