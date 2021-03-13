import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-parent-first',
  templateUrl: './parent-first.component.html',
  styleUrls: ['./parent-first.component.scss'],
  providers: [SharedService]
})
export class ParentFirstComponent implements OnInit {
  parentFirst: string | undefined;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.parentFirst = this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue(){
    this.logger.log('Parent 1 calls getValue method');
    return this.service.getValue();
  }

}
