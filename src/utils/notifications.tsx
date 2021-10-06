import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";

export const notificationMessage = (
  key: "error"|"success",
  message: string,
  description: string
) => {
  notification.close("loading");
  notification.close("registration-warning");
  notification[key]({
    key,
    message,
    description,
  });
};
export const notificationLoadingMessage = (
  message: string,
  description?: string
) => {
  notification.close("success");
  notification.close("error");
  notification.close("registration-warning");
  notification.open({
    key: "loading",
    message,
    description,
    icon: <LoadingOutlined />,
    duration: 0
  });
};
