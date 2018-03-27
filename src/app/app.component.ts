import { Component } from '@angular/core';

import { NotificationService, TextToSpeechService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private notifySvc: NotificationService,
    private textToSpeechSvc: TextToSpeechService
  ) {}

  public getVoices(): void {
    this.textToSpeechSvc.listVoices();
  }
}
