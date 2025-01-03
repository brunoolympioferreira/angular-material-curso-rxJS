import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent {
  constructor(
    public matDialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  public closeDialog() {
    this.matDialogRef.close('Returned Bazinga');
  }
}
