import React, { useEffect, useState } from "react";
import { List, Button, Typography } from "antd";
import {
  CaretDownOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SendOutlined,
  LoadingOutlined,
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
import {
  scrollToBottomChat,
  scrollToTopChat,
  useQuery,
} from "../../utils/utils";
import { useLocation } from "react-router-dom";

const { Paragraph } = Typography;
type Props = {
  isOpen?: any;
  setIsOpen?: any;
  isModal?: any;
  authedData?: any;
};

const ChatCollapse: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  isModal,
  authedData,
}) => {
  const { userList, dataMessage, selectedUserID, inputMessage, isLoadingWs } =
    useSelector((state: RootState) => state.chat);
  const [collapseSide, setCollapseSide] = useState(true);
  const dispatch = useDispatch();

  let query: any = useQuery();
  const loc = useLocation<any>();
  useEffect(() => {
    dispatch(getAllUserChatRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loc.state) {
      if (authedData?.user_id !== loc.state?.id) {
        let requestBody = {
          content: "Hallo",
          receiver: loc.state?.id,
        };
        let requestBodys = {
          pageNumber: 0,
          pageSize: 10,
          receiver: loc.state?.id,
        };
        dispatch(
          getHistoryChatRequest(requestBodys, () => scrollToBottomChat())
        );
        dispatch(changeStateChatRequest("selectedUserID", loc.state));
        dispatch(sendChatRequest(requestBody));

        history.push("chat");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get("sendto"), userList]);
  const pickUser = (userInfo: UserInfo) => {
    var availableWidth = window.innerWidth;

    dispatch(changeStateChatRequest("selectedUserID", userInfo));
    dispatch(changeStateChatRequest("inputMessage", ""));
    let requestBody = {
      pageNumber: 0,
      pageSize: 10,
      receiver: userInfo.id,
    };
    dispatch(getHistoryChatRequest(requestBody, () => scrollToBottomChat()));

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
  const showMore = (pageSize: any) => {
    let requestBody = {
      pageNumber: 0,
      pageSize,
      receiver: selectedUserID.id,
    };
    dispatch(getHistoryChatRequest(requestBody, () => scrollToTopChat()));
  };
  useEffect(() => {
    dispatch(changeStateChatRequest("notificationCount", 0));
    if (Number.isInteger(selectedUserID)) {
      let uI: any = {};
      for (let index = 0; index < userList.data.response.length; index++) {
        const element = userList.data.response[index].conversationWith;
        if (element.id === selectedUserID) {
          uI = element;
          break;
        }
      }
      dispatch(changeStateChatRequest("selectedUserID", uI));
    }
  }, [isOpen]);
  return isLoadingWs ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingOutlined style={{ fontSize: 24 }} spin />
    </div>
  ) : (
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
                    title={
                      <Paragraph ellipsis>
                        {item.conversationWith.namaUmkm ||
                          item.conversationWith.email}{" "}
                      </Paragraph>
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
              <div className="peb-dflex-center">
                {dataMessage?.data.response.totalDataOnPage !==
                dataMessage?.data.response.totalData ? (
                  <Button
                    shape="round"
                    type="primary"
                    onClick={() =>
                      showMore(dataMessage?.data.response.totalDataOnPage + 10)
                    }
                  >
                    Tampilkan lebih...
                  </Button>
                ) : null}
              </div>
              {dataMessage?.data.response.data
                ?.slice()
                .reverse()
                .map((item: any) =>
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
