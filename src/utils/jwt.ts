import { jwtDecode } from "jwt-decode";
export const decodedToken = (totken: string) => {
  return jwtDecode(totken);
};
