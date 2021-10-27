import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "../components";
import PageNotFound from "../components/PageNotFound";
import { ProtectedRoute } from "./protectedRoute";

import SockJS from "sockjs-client";
import { EncryptionUtil } from "../utils/Encryption";
import { ChatMessage } from "../models/ChatOnly";
import { changeStateChatRequest } from "../actions/chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../models/RootState";

const Routes = () => {
  const dispatch = useDispatch();
  let stompClients: any = null;
  const sockJsClient = new SockJS(`${process.env.REACT_APP_MESSAGING_URL}ws/`);
  const { dataMessage, selectedUserID } = useSelector(
    (state: RootState) => state.chat
  );
  let onConnected = () => {
    const user: any = ProtectedRoute()?.data?.user_id;
    console.log("Connected!!");
    let messageAdd: ChatMessage[] = dataMessage;
    stompClients.subscribe(
      "/topic/message/" +
        EncryptionUtil.encodeHex(user + "-message-destination"),
      function (msg: any) {
        if (msg.body) {
          let messageAdd2: ChatMessage[] = messageAdd;
          let jsonMessage: ChatMessage = JSON.parse(msg.body);
          messageAdd2.push(jsonMessage);
          dispatch(changeStateChatRequest("selectedUserID", selectedUserID));
          dispatch(changeStateChatRequest("inputMessage", messageAdd2));
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
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.clear()
  return (
    <Layout title="ADA UMKM">
      <Suspense fallback={<div />}>
        <Switch>
          {ProtectedRoute().routes.map((value: any, key: any) => (
            <Route
              key={key}
              exact={value.exact}
              path={value.path}
              render={() => (
                <value.component authedData={ProtectedRoute().data} />
              )}
            />
          ))}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
