export interface CabeceraInterface {
    pos: string; //API Token del POS.
    fecha_emision: string;
    tipo_documento: string; //FAC:factura, LQC:liquidacion de compra
    documento: string; //Numero del documento (001-001-000000000)
    electronico: boolean, //siempre va true 
    autorizacion: string;
    subtotal_0: number;
    subtotal_12: number;
    iva: number;
    ice: number;
    total: number;
    cliente: ClienteInterface;
    detalles: DetalleInterface[];
    cobros?: CobrosInterface;
    caja_id?: string,
    descripcion?: string;
    adicional1?: string;
    adicional2?: string;
    servicio?: number; //Representa el valor del porcentaje de servicio del documento (8 int, 2 decimal)max.
    estado?: string, //(P:pendiente, C:cobrado, G:pagado, A:anulado, E:generado, F:facturado)
}

export interface ClienteInterface {
    cedula: string;
    razon_social: string;
    tipo: string; //Tipo de persona (N:Natural J:Juridica I:SinId P:Placa).
    ruc?: string;
    telefonos?: string;
    direccion?: string;
    email?: string;
    es_extranjero?: boolean;
}

export interface CobrosInterface {
    forma_cobro: string; //(EF: Efectivo, CQ: Cheque, TC: Tarjeta Crédito, TRA: Transferencia)
    monto: number;
    tipo_ping: string; // (Tipo de transaccion con TC (D:datafast, M:medianet, E:dataexpress, P:placetopay, A:alignet))
    numero_cheque?: string;
}

export interface DetalleInterface {
    producto_id: string;
    cantidad: number;
    precio: number;
    porcentaje_descuento: number;
    base_cero: number; //(Representa el valor del producto si grava 0% iva (8 int, 2 decimal))
    base_gravable: number; //Representa el valor del producto si grava 12% iva (8 int, 2 decimal)
    base_no_gravable: number; // Representa el valor del producto si no grava iva (8 int, 2 decimal
    porcentaje_ice: number;
    valor_ice: number;
    porcentaje_iva?: number;
}