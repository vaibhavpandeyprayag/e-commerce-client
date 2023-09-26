export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export interface APIResponse {
  message: string;
  data?: any;
}

// returns false if session has expired, or invalid user found
export const loggedIn = async (token: string) => {
  let httpRes = await fetch(`${BASE_URL}/auth/test`, {
    method: "POST",
    headers: { Authorization: token },
  });
  if (!httpRes.ok) {
    console.log("res is not ok");
    return false;
  }
  console.log("res is ok");
  return true;
};
