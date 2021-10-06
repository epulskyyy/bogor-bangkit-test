import "../../styles/base.scss";
import ContentHome from "./components/ContentHome";
import Banner from "../../components/Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import SockJS from "sockjs-client";

import { getProductByCountRequest } from "../../actions/product";
import { getBannerRequest } from "../../actions/banner";
import Container from "./components/Container";
import { EncryptionUtil } from "../../utils/Encryption";
import { ChatMessage } from "../../models/ChatOnly";
import { RootState } from "../../models/RootState";
import { changeStateChatRequest } from "../../actions/chat";

type Props = {
  authedData?: any;
};
const Home: React.FC<Props> = ({ authedData }) => {
  let stompClients: any = null;
  const sockJsClient = new SockJS(`${process.env.REACT_APP_PEMULIHAN_EKONOMI_URL}ws/`);
  const { userList, dataMessage, selectedUserID } = useSelector(
    (state: RootState) => state.chat
  );

  const dispatch = useDispatch();

  let onConnected = () => {
    const user: any = authedData?.user_id
    console.log("Connected!!");
    let messageAdd: ChatMessage[] = dataMessage;
    stompClients.subscribe(
      "/topic/message/" +
        EncryptionUtil.encodeHex(user + "-message-destination"),
      function (msg: any) {
        if (msg.body) {
          console.log("message : " + msg.body);
          let messageAdd2: ChatMessage[] = messageAdd;
          let jsonMessage: ChatMessage = JSON.parse(msg.body);
          messageAdd2.push(jsonMessage);
          dispatch(changeStateChatRequest("selectedUserID", selectedUserID));
          dispatch(changeStateChatRequest("inputMessage", messageAdd2));
          console.log("list message setelah masuk baru", dataMessage);
        }
      }
    );
  };
  let onDisconnected = () => {
    console.log("Disconnected!!");
  };
  let connectWs = () => {
    const tokenFromStore = localStorage.getItem("access_token");
    var Stomp = require("stompjs/lib/stomp.js").Stomp;
    stompClients = Stomp.over(sockJsClient);
    stompClients.connect(
      { Authorization: tokenFromStore },
      onConnected,
      onDisconnected
    );
    // stompClients.connect({},onConnected,onDisconnected)
  };

  useEffect(() => {
    connectWs();
  }, []);

  useEffect(() => {
    dispatch(getProductByCountRequest(8));
    dispatch(getBannerRequest());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  return (
    <Container title="Beranda" authedData={authedData}>
      <div>
        <Banner data={[{}]} />
      </div>
      <div className="container mt-2 mb-2">
        <ContentHome />
      </div>
    </Container>
  );
};

export default Home;
