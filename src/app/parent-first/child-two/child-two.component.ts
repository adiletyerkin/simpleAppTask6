import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  childSecond: any;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.childSecond = this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue() {
    this.logger.log('Child Second calls getValue method ');
    return this.service.getValue();
  }

}
