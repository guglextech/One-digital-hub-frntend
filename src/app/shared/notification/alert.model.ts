export class Alert {

    // @ts-ignore
    type: AlertType;

     // @ts-ignore
    message: string;
     // @ts-ignore
    title: string;

     // @ts-ignore
    id: string;

     // @ts-ignore
    delay: number;

     // @ts-ignore
    keepAfterRouteChange;

     // @ts-ignore
    isVisible: boolean;
    userData: any;
    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning"
}

export enum PositiionType {
    TopCenter = 0,
    TopLeft = 1,
    TopRight = 2,
    BottomCenter = 3,
    BottomLeft = 4,
    BottomRight = 5,
    Middle = 6,
}
