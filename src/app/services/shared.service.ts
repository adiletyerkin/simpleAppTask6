import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class SharedService {
  value = 'Task6';

  constructor(private loggerService: LoggerService) { }

  // tslint:disable-next-line:typedef
  public getValue() {
    this.loggerService.log(`Get a value = ${this.value} `);
    return this.value;
  }

  // tslint:disable-next-line:typedef
  public setValue(newValue: string) {
    this.value = newValue;
    this.loggerService.log(`Set a new value = ${this.value} `);
  }
}
