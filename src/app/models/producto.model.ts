export class Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    sku: string;
    proveedor:string; //se agrego nuevo

    constructor(nombre, descripcion, precio, sku,proveedor) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.sku = sku;
        this.proveedor = proveedor; //se agrego nuevo, aqui tabien se puede colocar metodos ya que es u na clase
    }

}