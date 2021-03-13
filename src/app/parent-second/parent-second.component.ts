import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-parent-second',
  templateUrl: './parent-second.component.html',
  styleUrls: ['./parent-second.component.scss'],
  providers: [SharedService]
})
export class ParentSecondComponent implements OnInit {

  parentSecond: string | undefined;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.settingnewValue('Change Task');
    this.parentSecond = this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue() {
    this.logger.log('Parent Second calls getValue method');
    return this.service.getValue();
  }

  // tslint:disable-next-line:typedef
  settingnewValue(newValue: string) {
    this.logger.log('Parent Second calls setValue method');
    this.service.setValue(newValue);
  }

}
