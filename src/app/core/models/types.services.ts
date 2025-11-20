export interface IForecastPayload {
  serviceType: string;  
  title: string;  
  message: string;  
  debitType: "AUTO" | "MANUAL";  
  schedule: string;  
}

export interface IForecastResponse {
  success: boolean;
  message: string;
}

export interface IPriceSetupPayload {
  serviceType: string;
  currentPrice: number;
  newPrice: number;
  description: string;
}
