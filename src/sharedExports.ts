import { Dispatch, SetStateAction } from "react";

export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export interface APIResponse {
  message: string;
  data?: any;
}

interface AuthContextState {
  id: number;
  firstname: string;
}
export interface AuthContextType {
  authState: AuthContextState;
  setAuthState: Dispatch<SetStateAction<AuthContextState>>;
}

// returns false if session has expired, or invalid user found
export const loggedIn = async (token: string) => {
  try {
    let httpRes = await fetch(`${BASE_URL}/auth/test`, {
      method: "POST",
      headers: { Authorization: token },
    });
    if (!httpRes.ok) {
      console.log("res is not ok");
      throw new Error("Network response was not ok.");
    }
    console.log("res is ok");
    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};
