import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
declare var $: any;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idProd;
  product;
  imgPrimaria;

  constructor(
    public route: ActivatedRoute,
    public _api: ApiService,
  ) {
    this.idProd = this.route.snapshot.paramMap.get("id");

    this.getProduct(this.idProd);
  }

  ngOnInit(): void {
    
  }

  getProduct(id){
    this._api.getProductById(id).subscribe(resp => {
      this.product = resp.body['list'];

      this.getPrimaryImg(this.product.img);
    });
  }

  getPrimaryImg(img){
    this.imgPrimaria = img;
  }
}
