import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

/**
 * TODO
 * Auth token
 * https://stackoverflow.com/questions/42084958/how-to-use-the-watson-text2speech-rest-api-in-a-cordova-app
 * https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/#request_logging
 */
@Injectable()
export class TextToSpeechService {
  private textToSpeech: TextToSpeechV1;
  constructor(public http: Http) {
    this.textToSpeech = new TextToSpeechV1({
      'username': 'dd637aa0-0a0f-4d73-8bac-c1308f8ba73a',
      'password': 'rdgROVIaicfu'
    });
  }

  public listVoices(): void {
    this.textToSpeech.listVoices(null, (error, voices) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log(JSON.stringify(voices, null, 2));
      }
    });
  }

}
