import { Component, OnInit, ViewChild } from '@angular/core';
import { UuidService } from '../../service/uuid.service';
import { StudentService } from '../../service/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(
    private _uuidService: UuidService,
    private _stdService: StudentService
  ) { }

  @ViewChild('stdForm') stdForm!: NgForm

  ngOnInit(): void {
  }

  onStdSubmit() {
   if(this.stdForm.valid){
    let newStd = { ...this.stdForm.value, id: this._uuidService.uuid() }
    this._stdService.createNewStd(newStd)
    this.stdForm.resetForm()

   }
  }



}
