import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { NotificationPlacement } from "antd/lib/notification";

export const notificationMessage = (
  key: "error" | "success" | "warning",
  message: string,
  description: any,
  placement?: NotificationPlacement,
  duration?: number 
) => {
  placement = placement ?? "topRight";
  notification.close("loading");
  notification.close("registration-warning");
  notification[key]({
    key,
    message,
    description,
    placement,
    duration,
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
    duration: 0,
  });
};
