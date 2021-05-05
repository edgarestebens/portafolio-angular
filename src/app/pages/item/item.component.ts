import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetalle } from 'src/app/interfaces/produto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDetalle;
  id: string;

  constructor(private route: ActivatedRoute,
              private productService:ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros => {
      // console.log(parametros['id']);
      this.id = parametros['id'];
      this.productService.getProducto(parametros['id'])
          .subscribe((producto:ProductoDetalle) => {
            this.producto = producto;
            // console.log(this.producto);
          });      
    });
  }

  

}
