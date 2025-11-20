
import packageInfo from "../../package.json";
export const environment = {
  appVersion: packageInfo.version,
  production: false,
  BASE_URL: "https://lottogeneral.onrender.com/api/v1"
  // DEV_BASE_URL: "https://lottokeysservice.onrender.com/api/v1"
};
