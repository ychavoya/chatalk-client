export interface Response {
    status: number;
    statusText?: string;
    mensaje: string;
    detalles?: string[];
    fecha?: Date;
}
