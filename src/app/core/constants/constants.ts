export const enum DOCUMENT_TYPES {
  EXCEL = "excel",
  PDF = "pdf",
}

export enum DrawStatus {
  Active = "ACTIVE",
  Closed = "CLOSED",
  Pending = "PENDING",
}

export const STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  CLOSED : " CLOSED",
  SUCCESS : "SUCCESS",
  APPROVED : "APPROVED",
  REJECTED : "REJECTED",
};


export const DASHBOARD_HEADER_NAME = {
  STATUS : "Status",
  CREDIT_STATUS : "Credit Status",
  DEBIT_STATUS : "Debit Status",
  DRAWS : "Draws",
  PERMISSIONS : "Permissions",
}


export const SEARCH_TYPES = {
  ALL: "all", 
  OPTEDIN : "optedIn",
  OPTEDOUT : "optedOut"
}

export const DASHBOARD_ACTIONS = {
  VIEW: "View Details",
  INPUT_WINNING_NUMBERS: "Input Winning Numbers",
  DOWNLOAD: "Download",
  EDIT: "Edit",
  VIEW_DETAILS: "View Details",
  REACTIVATE_CLOSED_DRAW: "Re-activate closed draw",
  UNDO: "Undo",
  MAKE_PAYMENT : "Make payment",
  MANUAL_PAYMENT : "Manual payment",
  DELETE : "Delete",
  PERMISSION_UPDATE : "Update Permission",
  CANCEL_SUBCRIPTION : "Cancel Subscription",
  DISABLE_USER : "Disable User",
  ENABLE_USER : "Enable User",
};



type Status = 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'MATCHED' | 'UNMATCHED' | 'INCORRECT';

export const STATUS_COLOR_MAP: Record<Status, string> = {
  ACTIVE: 'text-success',
  INACTIVE: 'text-danger',
  PENDING: 'text-warning',
  MATCHED: 'text-primary',
  UNMATCHED: 'text-secondary',
  INCORRECT: 'text-muted',
};


export const SMS_TEMP_MESSAGES = {
  SAVE_SUCCESS: 'SMS template saved successfully',
  SAVE_ERROR: 'Error saving SMS template',
  FORM_INVALID: 'Please correct form errors before submitting'
};



 
