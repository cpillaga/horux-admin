import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/admin/core/services/api.service';
import { FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
    categorySelect: '';
    form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddCategoryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _formBuilder: FormBuilder,
        public _api: ApiService
    ) {
        this.categorySelect =  data.type;

        this.createForm();
    }
    
    ngOnInit() { 

    }

    createForm(){
        this.form = this._formBuilder.group({
            description: ['', [Validators.required]],
            type: this.categorySelect
        });
    }

    postCategory(){
        this.form.value.description = (this.form.value.description.toUpperCase());

        this._api.postCategory(this.form.value).subscribe(resp => {
            this.dialogRef.close({
                ok: true,
                resp
            });
        });
    }

    close(data?: any) {
        this.dialogRef.close({
            ok: false,
            resp: {}
        });
    }
    
}