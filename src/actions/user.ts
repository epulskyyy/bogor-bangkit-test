import { defaultActionCreator } from ".";

export const GET_ALL_USER_REQUEST = "GET_ALL_USER_REQUEST";
export const getAllUserRequest = defaultActionCreator(
  GET_ALL_USER_REQUEST,
  "perPage",
  "status",
  "page"
);
export const GET_ALL_USER_SUCCESS = "GET_ALL_USER_SUCCESS";
export const getAllUserSuccess = defaultActionCreator(
  GET_ALL_USER_SUCCESS,
  "data"
);
export const GET_ALL_USER_ERROR = "GET_ALL_USER_ERROR";
export const getAllUserError = defaultActionCreator(GET_ALL_USER_ERROR, "data");

export const GET_USER_BY_ID_REQUEST = "GET_USER_BY_ID_REQUEST";
export const getUserByIdRequest = defaultActionCreator(
  GET_USER_BY_ID_REQUEST,
  "id"
);
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS";
export const getUserByIdSuccess = defaultActionCreator(
  GET_USER_BY_ID_SUCCESS,
  "data"
);
export const GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR";
export const getUserByIdError = defaultActionCreator(
  GET_USER_BY_ID_ERROR,
  "data"
);

export const EDIT_PROFILE_REQUEST = "EDIT_PROFILE_REQUEST";
export const editProfileRequest = defaultActionCreator(
  EDIT_PROFILE_REQUEST,
  "id",
  "data",
  "func"
);
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const editProfileSuccess = defaultActionCreator(
  EDIT_PROFILE_SUCCESS,
  "data"
);
export const EDIT_PROFILE_ERROR = "EDIT_PROFILE_ERROR";
export const editProfileError = defaultActionCreator(
  EDIT_PROFILE_ERROR,
  "data"
);

export const GET_ALL_USER_INFINITE_REQUEST = "GET_ALL_USER_INFINITE_REQUEST";
export const getAllUserInfiniteRequest = defaultActionCreator(
  GET_ALL_USER_INFINITE_REQUEST,
  "perPage",
  "status",
  "page",
  "dataCurrent"
);
export const GET_ALL_USER_INFINITE_SUCCESS = "GET_ALL_USER_INFINITE_SUCCESS";
export const getAllUserInfiniteSuccess = defaultActionCreator(
  GET_ALL_USER_INFINITE_SUCCESS,
  "data",
  "dataCurrent"
);
export const GET_ALL_USER_INFINITE_ERROR = "GET_ALL_USER_INFINITE_ERROR";
export const getAllUserInfiniteError = defaultActionCreator(GET_ALL_USER_ERROR, "data");
