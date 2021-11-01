import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import { ProtectedRoute } from "./protectedRoute";

import SockJS from "sockjs-client";
import { EncryptionUtil } from "../utils/Encryption";
import {
  changeStateChatRequest,
  sendChatSuccess,
  notificationCount,
} from "../actions/chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../models/RootState";
import IndexPage from "../components/Page/IndexPage";

const Routes = () => {
  const { userList, dataMessage, selectedUserID, inputMessage, isLoadingWs } =
    useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  let stompClients: any = null;
  let onConnected = () => {
    const user: any = ProtectedRoute()?.data?.user_id;
    dispatch(changeStateChatRequest("isLoadingWs", false));
    console.log("Connected!!");
    stompClients.subscribe(
      "/topic/message/" +
        EncryptionUtil.encodeHex(user + "-message-destination"),
      function (msg: any) {
        if (msg.body) {
          try {
            let jsonMessage: any = JSON.parse(msg.body || "{}");
            let bodyMessage = {
              id: 0,
              content: jsonMessage.content,
              status: "SENT",
              sender: jsonMessage.sender,
              receiver: jsonMessage.receiver,
              createdDate: "",
            };
            dispatch(sendChatSuccess(bodyMessage));
          } catch (error) {}

          dispatch(notificationCount());
        }
      }
    );
  };
  let onDisconnected = () => {
    dispatch(changeStateChatRequest("isLoadingWs", false));

    console.log("Disconnected!!");
  };
  let connectWs = () => {
    const sockJsClient = new SockJS(
      `${process.env.REACT_APP_MESSAGING_URL}ws/`
    );
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
    var currentLocation = window.location.pathname;
    if (ProtectedRoute().wsChat) {
      if (
        !currentLocation.includes("admin") &&
        !currentLocation.includes("dashboard")
      ) {
        dispatch(changeStateChatRequest("isLoadingWs", true));
        connectWs();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.clear();
  return (
    <IndexPage
      title="Bogor Bangkit"
      authedData={ProtectedRoute().data || undefined}
      routes={ProtectedRoute().routes}
    >
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
          <Route
            path="*"
            render={() => (
              <PageNotFound
                authedData={ProtectedRoute().data || undefined}
                authedDataAdmin={ProtectedRoute().dataAdmin || undefined}
              />
            )}
          />
        </Switch>
      </Suspense>
    </IndexPage>
  );
};
const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
