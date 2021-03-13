import { Component } from '@angular/core';
import {LoggerService} from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleApp';
  logmessage: string[] = [];

  constructor(private logger: LoggerService) {
  }

  // tslint:disable-next-line:typedef
  getLogMessage() {
    this.logger.log('AppComponent calls getMessages');
    this.logmessage = this.logger.getLogMessage();
  }
}
