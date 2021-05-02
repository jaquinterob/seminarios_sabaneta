import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.scss']
})
export class ModalPasswordComponent {
  hide = true;
  pass = 'si';

  constructor(private readonly toast: MatSnackBar){}

  validation(): boolean{
    return this.pass === 'matrimonio';
  }
}
