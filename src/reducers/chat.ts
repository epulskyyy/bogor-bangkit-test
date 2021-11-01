import * as chatAction from "../actions/chat";

const initialState = {
  dataMessage: null,
  notificationCount: 0,
  inputMessage: null,
  userList: null,
  users: null,
  selectedUserID: null,
  isLoading: null,
  isLoadingWs: null,
  isMessageLoading: null,
  isSendLoading: null,
  isError: null,
  messageRes: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case chatAction.CHANGE_STATE_CHAT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case chatAction.GET_ALL_USER_CHAT_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case chatAction.GET_ALL_USER_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userList: action.data,
      };

    case chatAction.GET_ALL_USER_CHAT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case chatAction.GET_ALL_USERS_CHAT_SUCCESS:
      return {
        ...state,
        users: action.data,
      };

    case chatAction.GET_HISTORY_CHAT_REQUEST:
      return {
        ...state,
        isError: false,
        isMessageLoading: true,
      };
    case chatAction.GET_HISTORY_CHAT_SUCCESS:
      return {
        ...state,
        isMessageLoading: false,
        isError: false,
        dataMessage: action.data,
      };
    case chatAction.GET_HISTORY_CHAT_ERROR:
      return {
        ...state,
        isMessageLoading: false,
        isError: true,
      };
    case chatAction.SEND_CHAT_REQUEST:
      return {
        ...state,
        isError: false,
        isSendLoading: true,
      };
    case chatAction.SEND_CHAT_SUCCESS:
      const dt: any = state.dataMessage;
      let dataChat: any = {
        ...dt,
        data: {
          ...dt.data,
          response: {
            ...dt.data.response,
            data: [action.data, ...dt?.data.response.data],
          },
        },
      };
      return {
        ...state,
        isSendLoading: false,
        isError: false,
        dataMessage: dataChat,
        inputMessage: "",
      };
    case chatAction.SEND_CHAT_ERROR:
      return {
        ...state,
        isSendLoading: false,
        isError: true,
      };
    case chatAction.NOTIFICATION_COUNT:
      return {
        ...state,
        notificationCount: state.notificationCount + 1,
      };
    default:
      return state;
  }
}
