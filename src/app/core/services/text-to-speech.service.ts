import { Injectable } from '@angular/core';

// import TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

// https://www.ispeech.org/
// https://responsivevoice.org/api/

@Injectable()
export class TextToSpeechService {
  private responsiveVoice = (window as any).responsiveVoice;
  private textToSpeech: TextToSpeechV1;
  constructor() {
    this.textToSpeech = new TextToSpeechV1({
      'url': 'https://stream.watsonplatform.net/text-to-speech/api',
      'username': 'dd637aa0-0a0f-4d73-8bac-c1308f8ba73a',
      'password': 'rdgROVIaicfu',
      'headers': {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Authorization, content-type, Access-Control-Allow-Origin'
      }
    });
  }

  public getVoices(): string[] {
    return this.responsiveVoice.getVoices();
  }

  public speak(text: string, voice: string, pitch: number, rate: number, volume: number): void {
    this.responsiveVoice.speak(text, voice, {
      pitch,
      rate,
      volume
    });
  }

}

/**
 * import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HTTP_OPTS = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'x-test-header, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic ZGQ2MzdhYTAtMGEwZi00ZDczLThiYWMtYzEzMDhmOGJhNzNhOnJkZ1JPVklhaWNmdQ=='
  })
};

const API_ROOT: string = 'https://stream.watsonplatform.net/text-to-speech/api/'

@Injectable()
export class TextToSpeechService {
  constructor(private http: HttpClient) {
  }

  public listVoices(): void {
    this.http.get(`${API_ROOT}v1/voices?accept=application/json`, HTTP_OPTS)
      .subscribe((res) => {
        console.log(res)
      }, (err: any) => {
        console.error(err)
      });
  }

}
 */
