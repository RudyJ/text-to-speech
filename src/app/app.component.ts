import { Component } from '@angular/core';

import { NotificationService, TextToSpeechService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pitch: number = 1;
  public rate: number = 1;
  public text: string = '';
  public voice: string = 'UK English Male';
  public voices: string[];
  public volume: number = 1;
  constructor(
    private notifySvc: NotificationService,
    private textToSpeechSvc: TextToSpeechService
  ) {}

  public speak(): void {
    this.textToSpeechSvc.speak(this.text, this.voice, this.pitch, this.rate, this.volume);
  }

  ngOnInit(): void {
    this.voices = this.textToSpeechSvc.getVoices();
  }
}
