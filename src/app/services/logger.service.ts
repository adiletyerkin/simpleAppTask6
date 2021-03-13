export class LoggerService {
  logs: string[] = [];

  constructor() { }

  // tslint:disable-next-line:typedef
  public log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  public getLogMessage(): string[] {
    this.log('Get log messages');
    return this.logs;
  }
}
