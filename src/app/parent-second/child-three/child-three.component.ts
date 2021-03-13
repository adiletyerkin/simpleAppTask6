import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  childThird: string | undefined;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.childThird = this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue() {
    this.logger.log('Child3Component call getValue method.');
    return this.service.getValue();
  }

}
