export const loadState = () => {
  const auth = localStorage.getItem("_auth_state");
  try {
    if (auth === undefined) {
      return undefined;
    }
    return JSON.parse(auth ?? "");
  } catch (error) {
    return undefined;
  }
};
export const saveState = (state: any) => {
  const auth = state.auth;
  try {
    const serializedState = JSON.stringify(auth);
    localStorage.setItem("_auth_state", serializedState);
  } catch (err) {}
};
