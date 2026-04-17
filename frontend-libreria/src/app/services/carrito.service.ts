import { Injectable, signal, computed } from '@angular/core';

export interface CarritoItem {
  producto: any;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items = signal<CarritoItem[]>([]);

  totalUnidades = computed(() => {
    return this.items().reduce((acc, current) => acc + current.cantidad, 0);
  });

  totalPrecio = computed(() => {
    return this.items().reduce((acc, current) => acc + (current.producto.precio * current.cantidad), 0);
  });

  agregarProducto(producto: any) {
    this.items.update(items => {
      const existingItem = items.find(item => item.producto.id === producto.id);
      if (existingItem) {
        return items.map(item => 
          item.producto.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...items, { producto, cantidad: 1 }];
      }
    });
  }

  removerProducto(id: number) {
    this.items.update(items => items.filter(item => item.producto.id !== id));
  }

  actualizarCantidad(id: number, cantidad: number) {
    if (cantidad <= 0) {
      this.removerProducto(id);
      return;
    }
    this.items.update(items => 
      items.map(item => item.producto.id === id ? { ...item, cantidad } : item)
    );
  }

  vaciarCarrito() {
    this.items.set([]);
  }
}
