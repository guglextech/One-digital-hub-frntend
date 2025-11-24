
import packageInfo from "../../package.json";
export const environment = {
  appVersion: packageInfo.version,
  production: false,
  BASE_URL: "https://forecast-hub-backend.onrender.com/api/v1"
};
