import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    // private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editForm=new FormGroup({
    user_name:new FormControl(this.data.user_name),
    email:new FormControl(this.data.email),
    date_of_birth:new FormControl(new Date(this.data.date_of_birth)),
    gender:new FormControl(this.data.gender),
    address:new FormControl(this.data.address),
  })

  ngOnInit(): void {
  }
  submit() {
  this.dialogRef.close(this.editForm.value)  
  }
}
