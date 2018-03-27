import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent {
  public content: string;
  public title: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string, title: string }) {
    this.content = data.content;
    this.title = data.title;
  }
}
