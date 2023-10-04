import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[]=[];
  categorySelect = "";
  constructor(
    public _api: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCategories('BRAND');
  }

  getCategories(type){
    this.categorySelect = type;

    this._api.getCategories(type).subscribe((resp: any) =>  {
      this.categories = resp.body['list'];
    });
  }

  openModal(){
    const openModal = this.dialog.open(AddCategoryComponent, {
      data: {
        type: this.categorySelect
      },
      width: "400px"
    });


    openModal.afterClosed().subscribe(result => {
      if (result.ok ===  true) {
        alert('creado correctamente');
        this.getCategories(this.categorySelect);
      }
    });
  }
}
