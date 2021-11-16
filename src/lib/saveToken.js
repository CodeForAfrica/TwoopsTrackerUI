import { setSessionItem } from "./sessionStorage";

export default function saveToken(accessToken, refereshToken) {
  setSessionItem("accessToken", accessToken);
  setSessionItem("refreshToken", refereshToken);
}
