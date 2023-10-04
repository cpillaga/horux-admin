import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/admin/core/services/api.service';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { AddCategoryComponent } from '../../categories/add-category/add-category.component';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  loading = false;
  form: FormGroup;
  brands: any[] = [];
  genders: any[] = [];
  models: any[] = [];
  movements: any[] = [];

  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(1));
  private filesControlLateral = new FormControl(null, FileUploadValidators.filesLimit(1));
  files: File[] = [];
  filesLateral: File[] = [];

  public selectImg: File = null;
  public img?: string;
  public nomImg: string;
  public imgTemp: any = null;

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public _api: ApiService
  ) {
    this.createForm();
  }

  ngOnInit() { 
    this.getBrands();
    this.getGenders();
    this.getModels();
    this.getMovements();
  }

  createForm() {
    this.form = this._formBuilder.group({
      material: ['', [Validators.required]],
      width: ['', [Validators.required]],
      dialShape: ['', [Validators.required]],
      type: ['', [Validators.required]],
      diameter: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      resistance: ['', [Validators.required]],
      calendar: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      img: ['', [Validators.required]],
      imgLateral: ['', [Validators.required]],
      imgName: ['',  [Validators.required]],
      imgNameLateral: ['',  [Validators.required]],
      brand: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      model: ['', [Validators.required]],
      movement: ['', [Validators.required]],
      price: ['',  [Validators.required]]
    });
  }

  onSelect(event) {
    this.files[0] = (event.addedFiles);

    this.filesControl = new FormControl(this.files[0], FileUploadValidators.filesLimit(1));

    this.form = this._formBuilder.group({
      material: [this.form.value.material || "", [Validators.required]],
      width: [this.form.value.width || "", [Validators.required]],
      dialShape: [this.form.value.dialShape || "", [Validators.required]],
      type: [this.form.value.type || "", [Validators.required]],
      diameter: [this.form.value.diameter || "", [Validators.required]],
      longitude: [this.form.value.longitude || "", [Validators.required]],
      resistance: [this.form.value.resistance || "", [Validators.required]],
      calendar: [this.form.value.calendar || "", [Validators.required]],
      sku: [this.form.value.sku || "", [Validators.required]],
      imgLateral: [this.form.value.imgLateral || "", [Validators.required]],
      imgNameLateral: [this.form.value.imgNameLateral || "",  [Validators.required]],
      brand: [this.form.value.brand || "", [Validators.required]],
      gender: [this.form.value.gender || "", [Validators.required]],
      model: [this.form.value.model || "", [Validators.required]],
      movement: [this.form.value.movement || "", [Validators.required]],
      price: [this.form.value.price || "",  [Validators.required]],
      img: [this.filesControl],
      imgName: ['tiene valor']
    });
  }

  onSelectLateral(event) {
    this.filesLateral[0] = (event.addedFiles);

    this.filesControlLateral = new FormControl(this.filesLateral[0], FileUploadValidators.filesLimit(1));

    this.form = this._formBuilder.group({
      material: [this.form.value.material || "", [Validators.required]],
      width: [this.form.value.width || "", [Validators.required]],
      dialShape: [this.form.value.dialShape || "", [Validators.required]],
      type: [this.form.value.type || "", [Validators.required]],
      diameter: [this.form.value.diameter || "", [Validators.required]],
      longitude: [this.form.value.longitude || "", [Validators.required]],
      resistance: [this.form.value.resistance || "", [Validators.required]],
      calendar: [this.form.value.calendar || "", [Validators.required]],
      sku: [this.form.value.sku || "", [Validators.required]],
      img: [this.form.value.img || "", [Validators.required]],
      imgName: [this.form.value.imgName || "",  [Validators.required]],
      brand: [this.form.value.brand || "", [Validators.required]],
      gender: [this.form.value.gender || "", [Validators.required]],
      model: [this.form.value.model || "", [Validators.required]],
      movement: [this.form.value.movement || "", [Validators.required]],
      price: [this.form.value.price || "",  [Validators.required]],
      imgLateral: [this.filesControlLateral],
      imgNameLateral: ['tiene valor']
    });
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    this.filesControl = new FormControl('', FileUploadValidators.filesLimit(1));

    this.form = this._formBuilder.group({
      material: [this.form.value.material || "", [Validators.required]],
      width: [this.form.value.width || "", [Validators.required]],
      dialShape: [this.form.value.dialShape || "", [Validators.required]],
      type: [this.form.value.type || "", [Validators.required]],
      diameter: [this.form.value.diameter || "", [Validators.required]],
      longitude: [this.form.value.longitude || "", [Validators.required]],
      resistance: [this.form.value.resistance || "", [Validators.required]],
      calendar: [this.form.value.calendar || "", [Validators.required]],
      sku: [this.form.value.sku || "", [Validators.required]],
      imgLateral: [this.form.value.imgLateral || "", [Validators.required]],
      imgNameLateral: [this.form.value.imgNameLateral || "",  [Validators.required]],
      brand: [this.form.value.brand || "", [Validators.required]],
      gender: [this.form.value.gender || "", [Validators.required]],
      model: [this.form.value.model || "", [Validators.required]],
      movement: [this.form.value.movement || "", [Validators.required]],
      price: [this.form.value.price || "",  [Validators.required]],
      img: [this.filesControl],
      imgName: ['']
    });
  }

  onRemoveLateral(event) {
    this.filesLateral.splice(this.filesLateral.indexOf(event), 1);
    this.filesControlLateral = new FormControl('', FileUploadValidators.filesLimit(1));

    this.form = this._formBuilder.group({
      material: [this.form.value.material || "", [Validators.required]],
      width: [this.form.value.width || "", [Validators.required]],
      dialShape: [this.form.value.dialShape || "", [Validators.required]],
      type: [this.form.value.type || "", [Validators.required]],
      diameter: [this.form.value.diameter || "", [Validators.required]],
      longitude: [this.form.value.longitude || "", [Validators.required]],
      resistance: [this.form.value.resistance || "", [Validators.required]],
      calendar: [this.form.value.calendar || "", [Validators.required]],
      sku: [this.form.value.sku || "", [Validators.required]],
      img: [this.form.value.img || "", [Validators.required]],
      imgName: [this.form.value.imgName || "",  [Validators.required]],
      brand: [this.form.value.brand || "", [Validators.required]],
      gender: [this.form.value.gender || "", [Validators.required]],
      model: [this.form.value.model || "", [Validators.required]],
      movement: [this.form.value.movement || "", [Validators.required]],
      price: [this.form.value.price || "",  [Validators.required]],
      imgLateral: [this.filesControlLateral],
      imgNameLateral: ['']
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  close(data?: any) {
    this.dialogRef.close({
      ok: false
    });
  }

  getBrands(){
    this._api.getCategories('BRAND').subscribe((resp: any) =>  {
      this.brands = resp.body['list'];
    });
  }

  getGenders(){
    this._api.getCategories('GÉNERO').subscribe((resp: any) =>  {
      this.genders = resp.body['list'];
    });
  }

  getModels(){
    this._api.getCategories('MODEL').subscribe((resp: any) =>  {
      this.models = resp.body['list'];
    });
  }

  getMovements(){
    this._api.getCategories('MOVEMENT').subscribe((resp: any) =>  {
      this.movements = resp.body['list'];
    });
  }

  postProduct(){
    this.convertFile(this.form.value.img.value[0]).subscribe(base64Img => {
      this.convertFile(this.form.value.imgLateral.value[0]).subscribe(base64ImgLateral => {
        this.form.value.img = base64Img;
        this.form.value.imgLateral = base64ImgLateral;

        delete this.form.value.imgName;
        delete this.form.value.imgNameLateral;

        this._api.postProduct(this.form.value).subscribe(resp  =>  {
          this.dialogRef.close({
            ok: true
          });
        });
      });
    });
  }

  openModal(category){
    const openModal = this.dialog.open(AddCategoryComponent, {
      data: {
        type: category
      },
      width: "400px"
    });

    openModal.afterClosed().subscribe(result => {
      if (result.ok ===  true) {
        switch (category) {
          case 'BRAND':
            this.getBrands();
          case 'MODEL':
            this.getModels();
          case 'MOVEMENT':
            this.getMovements();
          default:
            break;
        }
      }
    });
  }
}
