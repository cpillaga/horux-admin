import { Component, OnInit, OnDestroy, ViewChild, Input, EventEmitter, Output } from "@angular/core";

import { Event } from "../../../public/core/Interfaces/event.intertace";
import { MatDialog } from "@angular/material/dialog";
import { SlideInterface } from "../../../public/core/Interfaces/carrusel.interface";
import { ApiService } from "../../core/services/api.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { AddProductComponent } from "./add-product/add-product.component";

@Component({
  selector: "app-home",
  templateUrl: "product.component.html",
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  dataSource: any;
  currentPage = 1;
  perPage = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public _api: ApiService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this._api.getProducts().subscribe((resp: any) =>  {
      this.products = resp.body['list'];
      this.dataSource = new MatTableDataSource(this.products);
    }, (err: any) => {
      console.log(err);
    });
  }

  openModal(){
    const  openModal =  this.dialog.open(AddProductComponent, {});

    openModal.afterClosed().subscribe(result => {
      if (result.ok ===  true) {
        this.getProducts();
      }
    })
  }
}
