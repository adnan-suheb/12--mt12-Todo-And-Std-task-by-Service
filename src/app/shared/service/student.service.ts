import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { Istd } from '../interface/std.interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _uuidService: UuidService,
    private _snackBarService:SnackBarService
  ) { }


  // stdArr: Istd[] = [
  //   {
  //     fname: 'John',
  //     lname: 'Doe',
  //     contact: '9876543210',
  //     email: 'jd@gmail.com',
  //     id: this._uuidService.uuid()
  //   },
  //   {
  //     fname: 'May',
  //     lname: 'Doe',
  //     contact: '9876543210',
  //     email: 'md@gmail.com',
  //     id: this._uuidService.uuid()
  //   },
  //   {
  //     fname: 'August',
  //     lname: 'Doe',
  //     contact: '9876543210',
  //     email: 'ad@gmail.com',
  //     id: this._uuidService.uuid()
  //   }
  // ]

  stdArr: Istd[]=JSON.parse(localStorage.getItem('stdArr')||'[]')

  fetchAllStd():Istd[]{
    return this.stdArr
  }


  createNewStd(data:Istd){
    this.stdArr.push(data);
    localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
    this._snackBarService.openSnackBar(`New Student ${data.fname} ${data.lname} Added Successfully!!!`)
  }

  removeStd(data:Istd){
    let getIndex = this.stdArr.findIndex(std=>std.id===data.id)
    this.stdArr.splice(getIndex,1)
    localStorage.setItem('stdArr',JSON.stringify(this.stdArr))

  }
}
