import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private _dialog:MatDialog
  ) { }

  openDialog(title:string, message:string){
    const _dialog = this._dialog.open(DialogComponent,{
      width:'400px',
      data:{title,message}
    });
    return _dialog.afterClosed()
  }
}
