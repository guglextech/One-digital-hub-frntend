export interface UserProfile {
  username: string;
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  username: string;
  role?: string;
  firstname: string;
  lastname: string;
  photo?: string;
  phone: string;
  permissions?: string[] | null;
}

export interface ChangePasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface ISucessMessageResponse {
  success: boolean;
  message: string;
  status?: number;
}

export interface ForgotPasswordRequest {
  username: string;
}

export interface UpdateStatus {
  email: string;
  lockAccount: boolean;
}

export interface UpdateUserRoleRequest {
  username: string;
  role: string;
}

export interface UpdateUserRoleResponse {
  success: boolean;
  message: string;
}

export interface UpdateUserResponse {
  success: boolean;
  message: string;
  updatedUser?: UserProfile;
}

export interface FileUploadResponse {
  success: boolean;
  message: string;
  fileUrl?: string;
}

export interface ISignup {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export interface ISignupResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Interface for the request payload
export interface DrawDashboardRequest {
  name: string;
  maxAmount: number;
  minAmount: number;
  closeTime: string;
}

// Example interface for response data (you can modify this based on the actual response structure)
export interface GenericAPIResponse {
  success: boolean;
  message: string;
  data?: any;
  response: any;
  result?: any;
}

export interface SmsRequest {
  title: string;
  type: string;
  message: string;
}

export interface SmsTriggerRequest {
  id?: number;
  title?: string;
}

export interface IApproveDraw {
  drawRef: string;
  approve: boolean;
}

 

export interface IDashboardStats {
  response: ISucessMessageResponse;
  totalDraws: string;
  totalStakes: string;
  totalPlayers: string;
  totalPlayerPayments: string;
  totalPlayerPayouts: string;
}

export interface UserResponse {
  response: ISucessMessageResponse;
  result: IUser;
}

export interface IUser {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  accountVerifiedAt: string | null;
  role: string;
  permissions: string[] | null;
  isLocked: boolean;
  authType: string;
  createdAt: string;
  updatedBy: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PrizeMultiplier {
  type: string;
  winMultiplier: number;
  charges: number;
}

export interface PrizeMultiplierRequest {
  prizeMultipliers: PrizeMultiplier[];
}

export interface CardConfig {
  title: string;
  getValue: (data: IDashboardStats) => number | string;
  textColor: string;
  format: string;
  background?: string;
}

export interface SMSConfig {
  id: number;
  type: string;
  title: string;
  message: string;
  status: string;
  triggeredBy?: string;
  triggeredAt?: string;
  createdBy?: string;
  createdAt?: string;
}

export interface ApiResponse {
  response: {
    message: string;
    status: number;
  };
  result: SMSConfig[];
}

 