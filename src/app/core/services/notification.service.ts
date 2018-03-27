import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Injectable()
export class NotificationService {
  private loadingDialog: MatDialogRef<LoadingDialogComponent>;
  private notificationSnackbar: MatSnackBarRef<string>;
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  public closeLoading(): void {
    this.loadingDialog.close();
  }

  public showError(message: string): void {
    this.snackBar.open(message, 'GOT IT!', {
      duration: 10000,
      extraClasses: 'snackbar--error'
    })
  }

  public showInfo(message: string, duration?: number): void {
    this.snackBar.open(message, 'GOT IT!', {
      duration: duration || 10000,
      extraClasses: 'snackbar--info'
    })
  }

  public showLoading(): void {
    this.loadingDialog = this.dialog.open(LoadingDialogComponent, {
      maxWidth: '256px',
      width: '256px'
    });
  }

  public showNotificationDialog(message: string, title: string): MatDialogRef<NotificationDialogComponent> {
    return this.dialog.open(NotificationDialogComponent, {
      data: {
        content: message,
        title
      }
    });
  }

}
