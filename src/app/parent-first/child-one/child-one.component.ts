import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  childFirst: string | undefined;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.childFirst = this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue() {
    this.logger.log('Child Fisrt calls getValue method.');
    return this.service.getValue();
  }

}
