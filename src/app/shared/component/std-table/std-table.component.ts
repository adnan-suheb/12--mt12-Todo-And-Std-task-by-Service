import { Component, OnInit } from '@angular/core';
import { Istd } from '../../interface/std.interface';
import { StudentService } from '../../service/student.service';
import { DialogService } from '../../service/dialog.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  constructor(
    private _stdService:StudentService,
    private _dialog:DialogService
  ) { }

  stdData:Istd[]=[]

  
  ngOnInit(): void {
    this.stdData = this._stdService.fetchAllStd()
  }

  onRemove(data:Istd){
    this._dialog.openDialog('Confirmation',`Are You Sure, You Want To Delete <strong>${data.fname} ${data.lname}</strong> ?`)
    .subscribe(result=>{
      if(result){
        this._stdService.removeStd(data)
      }
    })
  }





}
